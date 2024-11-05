import { Link } from "react-router-dom";
import React from "react";
import BackButton from "../../assets/icons/BackButton";
import { Locales, Constants } from "../../common";
import css1 from "../Catalog/css.module.css"
import Marquee1 from "react-fast-marquee";
import css from "./css.module.css"
import { map } from "lodash";
import c1 from "../../assets/project_logos/mb_pizza.png"
import c2 from "../../assets/project_logos/SoltanRes.png"
import c3 from "../../assets/project_logos/novada.png"
import c4 from "../../assets/project_logos/hezzet.png"
import c5 from "../../assets/project_logos/erzurum.png"
import c6 from "../../assets/project_logos/Hos_Cof.png"
import c7 from "../../assets/project_logos/hazyna_doner.png"
import c8 from "../../assets/project_logos/bagul.png"
import c9 from "../../assets/project_logos/hollywood.png"
import c10 from "../../assets/project_logos/gulalek.png"
import c11 from "../../assets/project_logos/kebapchy.png"
import c12 from "../../assets/project_logos/uzum.png"
import c13 from "../../assets/project_logos/Soltan_oa.png"
import c14 from "../../assets/project_logos/Melek.png"
import c15 from "../../assets/project_logos/nagina.png"

export default function App(){
    const cafes = [
        c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15
    ]
    const cafes2 = [
        c7,c8,c9,c10,c11,c12,c13,c14,c15,c1,c2,c3,c4,c5,c6
    ]
    const cafes3 = [
        c15,c14,c13,c12,c11,c10,c9,c8,c7,c6,c5,c4,c3,c2,c1
    ]
    return(
        <div style={{display:"grid"}}>
            <div className={css1["c-navbar"]} >
            <header>
                <Link to={Constants._welcome}>
                <BackButton color="var(--text)" />
                </Link>
                <h4>Offline Menu</h4>
                <span />
            </header>
            </div>
            <Marquee1 style={{marginTop:110,rotate:"2.5deg"}}>
            {
                cafes.map((e) => (
                    <div style={{display:"flex",alignContent:"center", marginRight:11,justifyContent:"center",width:"fit-content",padding: "13px 23.59px 13px 23.59px", border:"0.84px solid #F2F4F7", borderRadius:"10.11px", }}>
                        <img src={e} alt="" style={{height:50}} />
                    </div>
                ))
            }
            </Marquee1>

            <Marquee1 style={{marginTop:10,rotate:"2.5deg"}} direction="right">
            {
                cafes2.map((e) => (
                    <div style={{display:"flex",alignContent:"center", marginRight:11,justifyContent:"center",width:"fit-content",padding: "13px 23.59px 13px 23.59px", border:"0.84px solid #F2F4F7", borderRadius:"10.11px", }}>
                        <img src={e} alt="" style={{height:50}} />
                    </div>
                ))
            }
            </Marquee1>

            <Marquee1 style={{marginTop:10,rotate:"2.5deg"}}>
            {
                cafes3.map((e) => (
                    <div style={{display:"flex",alignContent:"center", marginRight:11,justifyContent:"center",width:"fit-content",padding: "13px 23.59px 13px 23.59px", border:"0.84px solid #F2F4F7", borderRadius:"10.11px", }}>
                        <img src={e} alt="" style={{height:50}} />
                    </div>
                ))
            }
            </Marquee1>

            <Marquee1 style={{marginTop:10,rotate:"2.5deg"}} direction="right">
            {
                cafes.map((e) => (
                    <div style={{display:"flex",alignContent:"center", marginRight:11,justifyContent:"center",width:"fit-content",padding: "13px 23.59px 13px 23.59px", border:"0.84px solid #F2F4F7", borderRadius:"10.11px", }}>
                        <img src={e} alt="" style={{height:50}} />
                    </div>
                ))
            }
            </Marquee1>

            <center style={{marginTop:36.19, width:"73%",justifySelf:"center"}}>
                <div>
                    <div style={{color:"#1D2939",fontSize:24, fontWeight:600}}>Ähli restoranlaryň menýulary <span style={{color:"#1570EF"}}> bir ýerde</span></div>
                    <div style={{color:"#667085",fontSize:16, fontWeight:400, marginTop:8}}>Siz bu platformaň içinde <span style={{color:"#1570EF"}}>70-den gowrak</span> restoranlaryň menýularyny görüp bilersiňiz.</div>
                </div>
                <div style={{marginTop:32, fontWeight:600, fontSize:16,color:"#000"}}>
                    <a href="https://apps.apple.com/tr/app/pikir-menu/id6479897081" style={{textDecoration:"none", color:"#000"}}>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        gap:10,
                        padding: "12px 16px 12px 16px",
                        borderRadius: "40px",
                        border: "1px solid #F2F4F7",
                        width: "90%",
                        
                    }}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={24}
                        fill="none"
                    >
                        <path
                        fill="#000"
                        d="M16.615 12.762a5.37 5.37 0 0 1 .725-2.622 5.507 5.507 0 0 1 1.925-1.954 5.662 5.662 0 0 0-1.96-1.708 5.79 5.79 0 0 0-2.532-.668c-1.89-.198-3.72 1.106-4.682 1.106-.962 0-2.46-1.088-4.028-1.053a6.08 6.08 0 0 0-2.92.853 5.924 5.924 0 0 0-2.113 2.15c-2.169 3.692-.553 9.112 1.533 12.1 1.046 1.46 2.264 3.09 3.856 3.032 1.593-.058 2.145-.972 4.023-.972 1.877 0 2.418.972 4.04.938 1.622-.035 2.727-1.468 3.738-2.947a11.839 11.839 0 0 0 1.705-3.405 5.324 5.324 0 0 1-2.39-1.938 5.164 5.164 0 0 1-.89-2.912M13.537 3.848A5.28 5.28 0 0 0 14.791 0a5.623 5.623 0 0 0-3.607 1.828 5.047 5.047 0 0 0-1.283 3.703 4.654 4.654 0 0 0 2.017-.429 4.562 4.562 0 0 0 1.62-1.254Z"
                        />
                    </svg>
                        AppStore
                    </div>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.babageldiorunov.pikir_menu&pcampaignid=web_share" style={{textDecoration:"none", color:"#000"}}>
                    <div style={{
                        display:"flex",
                        gap:10,
                        alignItems:"center",
                        justifyContent:"center",
                        padding: "12px 16px 12px 16px",
                        borderRadius: "40px",
                        border: "1px solid #F2F4F7",
                        marginBottom:58,
                        marginTop:16,
                        width: "90%",
                    }}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={22}
                        height={24}
                        fill="none"
                    >
                        <path fill="url(#a)" d="M0 0h22v24H0z" />
                        <defs>
                        <pattern
                            id="a"
                            width={1}
                            height={1}
                            patternContentUnits="objectBoundingBox"
                        >
                            <use xlinkHref="#b" transform="matrix(.00364 0 0 .00333 .01 0)" />
                        </pattern>
                        <image
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAAEsCAMAAADuPBapAAAC+lBMVEVHcEwAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAkkMAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0NsjjgAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0MAk0EDkGQAk0E1h9oLj3pBhfY5h+QPjoJAhvNBhfU7hukTjYtBhvQ9huwXjZMAkkYAkkM/hvAdjKIAkkohi6sAkk5AhvQkirMqib8BkVVBhfYticgCkV0wiM4ziNUGkGwJj3MajJonirg3h99ChfJBoDg4njjTvCD/xRj/xRlCoDfcvh7/xRj/xRn/xRn/xRn/xRlOojXjvx3/xBn/xRn/xRn/xRn/xRlYpDTqwRv/xRn/xRn/xRlipjL/xRn/xRn/xRlrqDHwwhr/xRl3qi/1wxn/xRn/xRmDrC3/xRn/xRn/xRkGlkCYsCn6xBn/xRn/xRn/xRkSlz6jsyj/xhj/xRn/xRn3kiSutSb+xBj/xRn/xRn/xRkgmj25tyP/xRj/xRnDuSL/xRn/xRkunDrNuyH/xRn/xRn/xRnVvB//xRn/xBn/xRmOriv/xRlBhfM/hvdDgc6flUA/hvVSfuKuVnrsSzD3mCFWfN26UGvrOjDpOjLqQjH2jyI+hvZcetfBTmTpPDPoOTPzgyX+wRlieNHGS17oPDPpPDLpPjLzfSZodcrMSVbxdCj9uxr/xhhvcsHQRlHrOjDpPDPwbCl4brjUREzoOTPvZSr8shvYQkfuXSyCaq7cQULtVS36qh6LZqLgPz75oh9EhPCVYZfkPThIg+2eXYzrSTBMgeinWYL1hyO0U3PyeCfsTi7qRjH/xRnpPDPpOzPqRDHpPDPpPDPpPDPpOzPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDPpPDOi8f5aAAAA/nRSTlMABiRJeqXA3uzzyQozb6/+/xpkth/S+xPYAVGCK+ZADp1b95OJ//7+/v7//v7///7+//7+/v/+/v7+/v7+/v7+/v7+/v7+/v7+/in/3HQW/v7//MZRCP7+///1qzr+/uuOJf7YbRH+/r/+/qQz/uSFHv7+/tNkDf7+/rhGBP7+8Z0r/v5+Gv7NXP7++LFB/pLeiv7C///+/f/+/v7+/v7+//7+/v7+///+/v7+///+/v7+/v7//v7//v7+/v7//v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6V8aMy+75OB9FlD+aKHzfCU9duFOqRJPeuQMxYCtx6GJosuOGDSDrGXnKkLJ4AAAvySURBVHgB5NeFEaVAEEXRxged93F38k9xS9cNrZrm5NBy6Y803TAt2xGu6wrHs0xD1+il/CCMHFfiG+k6URj49D6fOBH4HZHEH3qX1Mxy/EmemSm9RxGW+CuZhQW9Q2XYOf4lt2uNXqBoBP6HawXEXptI/KeuSYm3PsMOWTwQY7WDXfLE0IirusNe7tgST0aHAxzzQwwFJQ6R3sRvfXxsHDVHfUWsaIvEcWJpiZPJxRnS4fSspxlOkl7NJfarVeK02Qoq4iDocAWx6qS+asFFSgbro+1wldxW/lk3JXZg3vqFhx24t77hYgfurb9iB+6tP9i4gRhb9s8G/9afctxDepNPqtnzlfNv/QQ3EotOSsmwH99nXeBe0lap9WfczVWo9SXu1ynT+tiP8frAM2Y1Wn/b8Ax3VKD1v5BvFqiVQEEQZC+wcRfsu/d3d73/geJNmLhOD6SPUFgV814q/Q6OP9X6mawfjvitn8sX/HBsRW/9Yqlc2XLDEf0wh2KpWqsnGx4k4rc+UCw1W20XHPFbH0ARzU7XA0f81scdjl7fF0fU1scDjsEw6QAhuqzjAcdoPEn78jgM2PoAcUwdtTRq6+MRx2zuiIOtvx+NBpfLLPxwcMe7RzFpFEt+lm7v+hFpwNfSuS22fjAarpZuW38nFg3iaC7bAhyHbP1ANB4s3RkH7/qX/2LREFl6oNbHCzhW1tL1ra+hQQ8bTNIKGvrWh5nO0mO0PsyEls5dKFsfL29kLV3f+lIaxdzanhb0ra+iwWixlq5vfRUNWroAh7T18RaOpSJalIc5vIEDzqcFfevjTRwbc1rQtb6eBi1dg4OyztaX06ClJ0UkBB9u8S6OscrSKetsfQENpaXrWx/vryewdFHrw0xr6frWh1lES6ess/UlNPSnBcGHW5hpLV3f+jDTWrq+9WGmtXR968MsrqWb1hfToKUP02IUbH0xDcEDIMGHW7wz4WlB8IYfn9soM4+B45p4s8auK4iC4BJ+7NywAb/YsViaj2JmZo0tZsYNW9jG59OmmlpCRV1n7mis8zb4le6g1udt8AdA/MOcb4Nf6V7r1/M22AMgnyxraGxqTmmDOtM3yAotrW2hWCqns8Gc6Ru8yQqValutvb2js+tVIhs6AEq30iWju+dexgO9ff2JbHhn+oCMdwMvMu4ZHBoGbOAr3ZcxMnovQ4SxUhmwwa50X8b4xJMM0TE5RdgwnhZ4GdOS0S5mZud4G+KDVjotY35h8WsZYml5BbBhrHRSxuratzJEDB8/rfM2Eq70N4XVjc0fZIit7R3eBr/SJWN3L/5Ehogz+wewDf5MX2t89zC2tf+ScHS8wtsgV7pknJxKRj5n5xfrmA3+TF8yGi4NGff0Xu3wNrCVrmiN7SbXTc2MDX6lK1pjrd1FrY/a0ErnotVCrc/a0EoHo9Wk96YfsEGe6avTFK0ean3ehlY61mkGan3ABrLS1Wm3OWlisDU5xdrQSkej1UCtD9vQSiej1SXetz5gAzgAepPlR6vP2X3rUzZ0APQfVnqmaPUwWh+woQMgPFpdrvcPSBv6TAtHq4HR+r4NfqUrWtv+XobX+r4NfqXrpbXdx2v9fssGvNL9l1Yft/UBG+4BkL/GFa3/lnBXKmM2/DN9/3HRx259woai5f0bPlp94n3rUzZ0ps9Hq8/9WIdsaKXz0eoTzqcYGzrTTxStJtfL64gN/0w/J1rVaf+VjpsVwIbxmdaIVoAw2QzY+JvPtHppJYjnB44NfqWr0xStCJ3NgA3jM60RrQBxe8Wxwa90vbSihP11wwa80vXSWmuH2SoZNuinBUUrzlK/YQNe6Xpc5NkuQza00v1o5ekoYTa00u2LWJ6xYcqGzvTtaOU5O6Zs6ADIj1aeuxXMhg6A3Gjl6ShxNvS04EYrz+Q6aEPR4p0H88z0ywbj42dn+orW9sSEZdKGDoC8aOWZXCdtaKVb0cqzdIDYyDnTV6cZ0UqwdUHYyPlMq04zohUhNOE2dKavi9jP5J1jmiRrFIRzG3cZ93dv4No2pv6Mbdtsq1xt27a5nXHM047u58s80YglvI2KN8+pk5BWfa7a00BLJ9KqyAsBDbR0gbSSPFXQQEu3l1aSvxU00NKNpZXngYIGWrqxtPJ8Z04DSc/IzIKa7Hka6dk5uXn52wzHA08Fo6AwHInGtheOv0U04olkOJIqihaXbCccTzV9I15aFo6UpyqKKqv0OGTtCzCqa97ASL3BUVtXr8eha+bpH2c3NDZVpN6moqi5RY9DYm2A0drWVJ5Cito7OrcJjisXPHMYaa1dgPEeR3fn9ni+8f8tzxpGek8vYHzA0dePVR71k0BjGJ8ODALGUhxDahyCp8Tp2cMjo0thIO15+QIcqgkCYIyNj0aWwkAqiiYELV00XQKMyalmwFiFQ97SH1hNHgEjd00YwDGtraXfhwxppMdzZiJrwEDQ0oX/Q1/HDMYbaV0HBnDMCmvpi5ANDUjrBjD0LR2bTpbSSiJs6QewBWclrYwFWrqklF/zLGhAWsOUBHAoWvpvdz0DGvC0tnA5wSBt6d8dwWa1AYylnsbTPmeN49yBkAcagXtazyCBIW7p587f8pCgYQyvIa0Mx7xpSz+/5GyLRloRfUv/7vclMDyNtDIclVajhQdPQt6SKKQV0bf0w/t+9JZGJa0MR7PBaOG78394yxMgjI2llRaPlqBb+tMvQ6CA6KR1M9IS5NB1YY2bRkJp3VRL9xMAP1gjkFYSg9HCufWOGQUmrU2RlGsiPrd0ftQ6IGnFcNEtFUV+b7yQI2gGw0US25a+8TF8g+EiCW3pfuI4eSrkbRCD4SKJYUunhzX10spxVDnXUrxghd1s9l9auac5t/TADvJaSqtDS+c4fDnWvC2kNeDRwuZf2uXzRmzERxhkASiII+9m0ipr6d99f1dwwZtIq6Sl42CkOY00SGtAqWjnLZ17O4m9tDq0dIKDeLsVjfTX0toYjgTJgi8AcW/nEUirC44ttPQ1vZ1EI60OLb0ExYN5+0Fv6xFIq0PImj73dhKBtDrhIC2deTuJOwwyXLRs6dzbSdw9jUirZUvn3k5iIK2WLR23ud1p6KXVYQEI3k5qOIlQWh2Clk683YgGhoszYUMYZAEI3i6iEU8QaTVr6fB2AxpGnua2AARvd4zr1zhtQtb0r7z29o80NOBpRFrtWjq8XUEDMLARqwrW9C/fwesMRDQgrfIUFXXgxVL+RC+tLll8Vc5dnbkRBFEUrjSU6wSzzw7AXyeyYmZmadj0Zr4L031LW38GYp2GajSlSnqjFWu1O12p1JtPxPL1+gOpmN5oBYajsVROb7SCL4xJTaqnMFqx1nTWFR/0RSs2XyzFj1fPHqI/Gav1Rnx5w4lYqu1uXxNvlEUr4A7Hk3ikK1qB8+UqXr1h9hBL/XYXz94we4ijFe8j8e1RovXQH4h/jxGtSTqWEAjRSut2jBCttG7H1HdabzGQYPidBrp9IwGpfjK21XY79orZQ4RuP0lY4MkgRuvZQ7cjhGildTvGi1bQ7ZEQoGgldjsBmj1EkFyuQgJmDzG7nQDMHgrf7VkkPHj2EG37jABf4wxnmI6FixCttG7HCNFK63aM1ml4+4wAzx4KYBWm2zF4jdO/7S6viQ70aHUF7vZg2NF6XlxFDxCthG5nAtFK6HYmcI3Ta7eXJ1GGsLkIup2JsLkIup2JsLkIup0JRCuh25lAtBK6nQlEK6HbmUC0Erqd6UengWgldDsLiFZCtzOBaCV0O9OnMNHqiuNJ9PsMngxCtxM9PYXo9rs8hq2hbsdWhrodmxvqdiw21O3Y2tnpdqxs2el2rLmy0+3YoPB0XVUe0sjHsVfc7UplWzvdji0PhrodS52dbsfuQzvdjkU3/nVVRZorO92ORSNnp9uxzbyCbh/IR1Fu7XQ71r05O92OjQtD3Y5Nzoa6HeusFHU733HFHzOlR+04VNTtfNlcUbfzNdtO7bFXguu6zu92PaJO4fjdrsf1ckZfGJer2LFJz/9+f7h5uhFLajJetP/+/VFvL8Zizym/xMmvYbtN4kt+EqNO92O66w3rLdeqD3u70fF+ko/uG1GbFWZh/1R8AAAAAElFTkSuQmCC"
                            id="b"
                            width={269}
                            height={300}
                        />
                        </defs>
                    </svg>

                        Google Play
                    </div>
                    </a>
                </div>
            </center>
        </div>
    );
}