@extends('layout')

@section('title') @lang('main.edit_food') @endsection

@section('content')
@include('include.block-header.min', ['data' => ['sub' => trans('main.edit_food'), 'title' => $food->name]])

<form action="{{ route('foods.update', $food->id) }}" class="form-contact needs-validation" method="POST"
  enctype="multipart/form-data" novalidate>
  @csrf
  @method('patch')
  <div class="card card-bordered mb-2">
    <div class="card-inner">
      <h5 class="float-title">@lang('main.name')</h5>
      <div class="row g-4">
        @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
        <div class="col-md-4">
          <div class="form-group">
            <label for="name-{{ $localeCode }}" class="form-label">{{ $properties['native'] }}</label>
            <div class="form-control-wrap">
              <input type="text" id="name-{{ $localeCode }}" name="name[{{ $localeCode }}]"
                value="{{ $food->getTranslation('name', $localeCode) }}"
                class="form-control form-control-lg @error('name.' . $localeCode) is-invalid @enderror"
                placeholder="{{ $properties['native'] }}" required>
              @if ($errors->has('name.' . $localeCode))
              <span class="invalid-feedback" role="alert"><strong>{{ $errors->first('name.' . $localeCode)
                  }}</strong></span>
              @else
              <span class="invalid-feedback" role="alert"><strong>@lang('main.field_required')</strong></span>
              @endif
            </div>
          </div>
        </div>
        @endforeach
      </div>
    </div>
  </div>
  <div class="row g-4">
    <div class="col-12">
      <label for="file" class="form-label">@lang('main.image')</label>
      <div class="form-control-wrap">
        <input type="file" id="file" name="file[]" multiple
          class="form-control form-control-lg @error('file') is-invalid @enderror"
          placeholder="@lang('main.choose_image')">
        @if ($errors->has('file'))
        <span class="invalid-feedback" role="alert"><strong>{{ $errors->first('file') }}</strong></span>
        @else
        <span class="invalid-feedback" role="alert"><strong>@lang('main.field_required')</strong></span>
        @endif
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label class="form-label" for="category"><span>@lang('main.category')</span></label>
        <div class="form-control-wrap">
          <select class="form-select @error('category_id') is-invalid @enderror" id="category" name="category_id"
            data-search="on" data-ui="lg" required>
            <option disabled hidden selected></option>
            @foreach ($categories as $category)
            <option value="{{ $category->id }}" {{ $food->category_id == $category->id ? 'selected' : '' }}>{{
              $category->name }}</option>
            @endforeach
          </select>
          @if ($errors->has('category_id'))
          <span class="invalid-feedback" role="alert"><strong>{{ $errors->first('category_id') }}</strong></span>
          @else
          <span class="invalid-feedback" role="alert"><strong>@lang('main.field_required')</strong></span>
          @endif
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="discount" class="form-label">@lang('main.discount')</label>
        <div class="input-group form-control-wrap">
          <input class="form-control form-control-lg" type="number" name="discount" id="discount"
            value="{{ $food->discount }}" min="1" step="0.01">
          <div class="input-group-append input-card-type">
            <select name="discount_unit" class="input-group-text form-select" aria-label="discount" data-search="off"
              data-ui="lg">
              <option value="manat" @if ($food->discount_unit == 'manat') selected @endif>@lang('main.manat')</option>
              <option value="percent" @if ($food->discount_unit == 'percent') selected @endif>@lang('main.percent')
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 flex flex-row justify-between">

      <div class="col-md-4">
        <div class="sp-plan-opt">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input @error('active') is-invalid @enderror" name="active"
              id="active" value="1" {{ $food->is_active ? 'checked' : '1' }}>
            <label class="custom-control-label text-soft" for="active">@lang('main.is_active')</label>
            @error ('active')
            <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
            @enderror
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="sp-plan-opt">
          <div class="custom-control custom-switch">
            <input onclick="ingradient()" type="checkbox"
              class="custom-control-input @error('has_parent') is-invalid @enderror" name="has_parent" id="has-parent"
              @if(count($ingredients)>0) {{ 'checked' }} @endif>
            <label class="custom-control-label text-soft" for="has-parent">ingredient</label>
            @error ('has_parent')
            <span class="invalid-feedback" role="alert"><strong>{{ $message }}</strong></span>
            @enderror
          </div>
        </div>
      </div>
    </div>

    <?php  $langg = LaravelLocalization::getSupportedLocales(); ?>
    <script>
      var langs = @json($langg);
    </script>

    <div id="ingradient" style="position: relative;" class="col-md-12 ingradientActive card card-bordered mb-2 mt-4">
      <div class="relative card-inner col-md-12">
        <h5 class="float-title">ingredient</h5>
        <div
          style="display:flex;flex-flow:row;justify-content:space-between; border-bottom:2px solid #ddd; padding-bottom:5px;margin-bottom:10px;align-items:center;"
          class="col-12">
          <div>
            <p style="color:#8bc34a;font-size:18px;user-select: select none;">Ingredient
            </p>
          </div>
          <div onclick="addInput(langs)" class="addField add">
            <div>&plus;</div>
          </div>
        </div>
        <div class="inp-group">


          <div class="inp-group">
            @foreach ($ingredients as $i)
            <div class="flex flex-row justify-start mt-2">
              <?php $var = $loop->index; ?>
              @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
              <div class="addedDiv2">
                <div class="form-group">
                  <label class="form-label">{{$properties['name']}}</label>
                  <div class="form-control-wrap">
                    <input class="form-control form-control-lg" value="{{$i->getTranslation('name', $localeCode)}}"
                      type="text" placeholder="{{$properties['name']}}" name="ingredient[{{$var}}][{{$localeCode}}]"
                      id="ingredient-{{$localeCode}}">
                  </div>
                </div>
              </div>
              @endforeach
              <a class="delete" onclick="removeInput(event);">×</a>
            </div>
            @endforeach



            <!-- $ingredients -->
          </div>

        </div>
      </div>




    </div>

    <div class="col-12">
      <button class="btn btn-primary">@lang('main.submit')</button>
    </div>
</form>
@endsection

@section('js')

<script src="{{  asset('js/btnCreate.js')}}"></script>

<script>
  function ingradient(){
          var ingradient = document.getElementById('ingradient');
          ingradient.classList.toggle("ingradientActive");
      }

      @if(count($ingredients)>0)
        ingradient();
        count = {{count($ingredients)-1}};
        
      @endif
</script>


<script>
  $(function() {
      $('b[role="presentation"]').hide();

      $('#priceTab .nav-link').click(function() {
          let tab_input = $('.tab-pane input');
          let this_input = $('#' + $(this).attr('aria-controls') + ' input');

          tab_input.prop('disabled', true);
          tab_input.removeAttr('required');

          this_input.prop('disabled', false);
          this_input.prop('required', true);
      });

      let form_select = $(".form-select");
      let select = $(".form-select select");
      let has_category = $("#has_category");

      toggleForm(has_category);

      has_category.change(function() {
          toggleForm($(this));
      })
  });

</script>

@endsection