(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,a,t){e.exports={user_form:"UserSignUpForm_user_form__2W16k",input:"UserSignUpForm_input__27LMc",citydata:"UserSignUpForm_citydata__2VZ38",city:"UserSignUpForm_city__1Ubjm",postal:"UserSignUpForm_postal__3LfNl",actions:"UserSignUpForm_actions__2Dmwj",button:"UserSignUpForm_button__w3kwG"}},102:function(e,a,t){e.exports={user:"User_user__Gq78E"}},128:function(e,a,t){"use strict";t.r(a);var n=t(9),o=t(1),l=t.n(o),i=t(98),r=t.n(i),u=function(e){var a=Object(o.useRef)(),t=Object(o.useRef)();return l.a.createElement("form",{className:r.a.login,onSubmit:function(e){e.preventDefault();var n=a.current.value,o=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",{method:"POST",body:JSON.stringify({email:n,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}})}},l.a.createElement("h1",null,"Login"),l.a.createElement("form",{className:r.a.input},l.a.createElement("label",{htmlFor:"login_username"},"UserName:"),l.a.createElement("input",{type:"text",id:"login_username"}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",id:"login_password"})),l.a.createElement("div",{className:r.a.actions},l.a.createElement("button",{className:r.a.button,type:"submit"},"Login")),l.a.createElement("p",{onClick:e.onSignUp},"New Customers.",l.a.createElement("br",null),"Create an Account...!"))},c=t(100),m=t.n(c),p=function(e){var a=Object(o.useRef)(),t=Object(o.useRef)();return l.a.createElement("form",{className:m.a.user_form,onSubmit:function(e){e.preventDefault();var n=a.current.value,o=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAaISA5Vy4eneIF0K23yVeOnn9_m95dMfQ",{method:"POST",body:JSON.stringify({email:n,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}})}},l.a.createElement("h1",null,"Register"),l.a.createElement("form",{className:m.a.input},l.a.createElement("label",{htmlFor:"username"},"UserName:"),l.a.createElement("input",{type:"text",id:"username"}),l.a.createElement("label",{htmlFor:"email"},"E-mail:"),l.a.createElement("input",{type:"email",ref:a}),l.a.createElement("label",{htmlFor:"tel"},"Mobile No:"),l.a.createElement("input",{type:"number",min:"10"}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",ref:t}),l.a.createElement("label",{htmlFor:"address"},"Address"),l.a.createElement("input",{type:"text"}),l.a.createElement("section",{className:m.a.citydata},l.a.createElement("section",{className:m.a.city},l.a.createElement("label",{htmlFor:"city"},"City"),l.a.createElement("input",{type:"text"})),l.a.createElement("section",{className:m.a.postal},l.a.createElement("label",{htmlFor:"postal"},"Postal Code"),l.a.createElement("input",{type:"number"}))),l.a.createElement("label",{htmlFor:"country"},"Country"),l.a.createElement("select",{id:"country",name:"country"},l.a.createElement("option",null,"select country"),l.a.createElement("option",{value:"AF"},"Afghanistan"),l.a.createElement("option",{value:"AX"},"Aland Islands"),l.a.createElement("option",{value:"AL"},"Albania"),l.a.createElement("option",{value:"DZ"},"Algeria"),l.a.createElement("option",{value:"AS"},"American Samoa"),l.a.createElement("option",{value:"AD"},"Andorra"),l.a.createElement("option",{value:"AO"},"Angola"),l.a.createElement("option",{value:"AI"},"Anguilla"),l.a.createElement("option",{value:"AQ"},"Antarctica"),l.a.createElement("option",{value:"AG"},"Antigua and Barbuda"),l.a.createElement("option",{value:"AR"},"Argentina"),l.a.createElement("option",{value:"AM"},"Armenia"),l.a.createElement("option",{value:"AW"},"Aruba"),l.a.createElement("option",{value:"AU"},"Australia"),l.a.createElement("option",{value:"AT"},"Austria"),l.a.createElement("option",{value:"AZ"},"Azerbaijan"),l.a.createElement("option",{value:"BS"},"Bahamas"),l.a.createElement("option",{value:"BH"},"Bahrain"),l.a.createElement("option",{value:"BD"},"Bangladesh"),l.a.createElement("option",{value:"BB"},"Barbados"),l.a.createElement("option",{value:"BY"},"Belarus"),l.a.createElement("option",{value:"BE"},"Belgium"),l.a.createElement("option",{value:"BZ"},"Belize"),l.a.createElement("option",{value:"BJ"},"Benin"),l.a.createElement("option",{value:"BM"},"Bermuda"),l.a.createElement("option",{value:"BT"},"Bhutan"),l.a.createElement("option",{value:"BO"},"Bolivia"),l.a.createElement("option",{value:"BQ"},"Bonaire, Sint Eustatius and Saba"),l.a.createElement("option",{value:"BA"},"Bosnia and Herzegovina"),l.a.createElement("option",{value:"BW"},"Botswana"),l.a.createElement("option",{value:"BV"},"Bouvet Island"),l.a.createElement("option",{value:"BR"},"Brazil"),l.a.createElement("option",{value:"IO"},"British Indian Ocean Territory"),l.a.createElement("option",{value:"BN"},"Brunei Darussalam"),l.a.createElement("option",{value:"BG"},"Bulgaria"),l.a.createElement("option",{value:"BF"},"Burkina Faso"),l.a.createElement("option",{value:"BI"},"Burundi"),l.a.createElement("option",{value:"KH"},"Cambodia"),l.a.createElement("option",{value:"CM"},"Cameroon"),l.a.createElement("option",{value:"CA"},"Canada"),l.a.createElement("option",{value:"CV"},"Cape Verde"),l.a.createElement("option",{value:"KY"},"Cayman Islands"),l.a.createElement("option",{value:"CF"},"Central African Republic"),l.a.createElement("option",{value:"TD"},"Chad"),l.a.createElement("option",{value:"CL"},"Chile"),l.a.createElement("option",{value:"CN"},"China"),l.a.createElement("option",{value:"CX"},"Christmas Island"),l.a.createElement("option",{value:"CC"},"Cocos (Keeling) Islands"),l.a.createElement("option",{value:"CO"},"Colombia"),l.a.createElement("option",{value:"KM"},"Comoros"),l.a.createElement("option",{value:"CG"},"Congo"),l.a.createElement("option",{value:"CD"},"Congo, Democratic Republic of the Congo"),l.a.createElement("option",{value:"CK"},"Cook Islands"),l.a.createElement("option",{value:"CR"},"Costa Rica"),l.a.createElement("option",{value:"CI"},"Cote D'Ivoire"),l.a.createElement("option",{value:"HR"},"Croatia"),l.a.createElement("option",{value:"CU"},"Cuba"),l.a.createElement("option",{value:"CW"},"Curacao"),l.a.createElement("option",{value:"CY"},"Cyprus"),l.a.createElement("option",{value:"CZ"},"Czech Republic"),l.a.createElement("option",{value:"DK"},"Denmark"),l.a.createElement("option",{value:"DJ"},"Djibouti"),l.a.createElement("option",{value:"DM"},"Dominica"),l.a.createElement("option",{value:"DO"},"Dominican Republic"),l.a.createElement("option",{value:"EC"},"Ecuador"),l.a.createElement("option",{value:"EG"},"Egypt"),l.a.createElement("option",{value:"SV"},"El Salvador"),l.a.createElement("option",{value:"GQ"},"Equatorial Guinea"),l.a.createElement("option",{value:"ER"},"Eritrea"),l.a.createElement("option",{value:"EE"},"Estonia"),l.a.createElement("option",{value:"ET"},"Ethiopia"),l.a.createElement("option",{value:"FK"},"Falkland Islands (Malvinas)"),l.a.createElement("option",{value:"FO"},"Faroe Islands"),l.a.createElement("option",{value:"FJ"},"Fiji"),l.a.createElement("option",{value:"FI"},"Finland"),l.a.createElement("option",{value:"FR"},"France"),l.a.createElement("option",{value:"GF"},"French Guiana"),l.a.createElement("option",{value:"PF"},"French Polynesia"),l.a.createElement("option",{value:"TF"},"French Southern Territories"),l.a.createElement("option",{value:"GA"},"Gabon"),l.a.createElement("option",{value:"GM"},"Gambia"),l.a.createElement("option",{value:"GE"},"Georgia"),l.a.createElement("option",{value:"DE"},"Germany"),l.a.createElement("option",{value:"GH"},"Ghana"),l.a.createElement("option",{value:"GI"},"Gibraltar"),l.a.createElement("option",{value:"GR"},"Greece"),l.a.createElement("option",{value:"GL"},"Greenland"),l.a.createElement("option",{value:"GD"},"Grenada"),l.a.createElement("option",{value:"GP"},"Guadeloupe"),l.a.createElement("option",{value:"GU"},"Guam"),l.a.createElement("option",{value:"GT"},"Guatemala"),l.a.createElement("option",{value:"GG"},"Guernsey"),l.a.createElement("option",{value:"GN"},"Guinea"),l.a.createElement("option",{value:"GW"},"Guinea-Bissau"),l.a.createElement("option",{value:"GY"},"Guyana"),l.a.createElement("option",{value:"HT"},"Haiti"),l.a.createElement("option",{value:"HM"},"Heard Island and Mcdonald Islands"),l.a.createElement("option",{value:"VA"},"Holy See (Vatican City State)"),l.a.createElement("option",{value:"HN"},"Honduras"),l.a.createElement("option",{value:"HK"},"Hong Kong"),l.a.createElement("option",{value:"HU"},"Hungary"),l.a.createElement("option",{value:"IS"},"Iceland"),l.a.createElement("option",{value:"IN"},"India"),l.a.createElement("option",{value:"ID"},"Indonesia"),l.a.createElement("option",{value:"IR"},"Iran, Islamic Republic of"),l.a.createElement("option",{value:"IQ"},"Iraq"),l.a.createElement("option",{value:"IE"},"Ireland"),l.a.createElement("option",{value:"IM"},"Isle of Man"),l.a.createElement("option",{value:"IL"},"Israel"),l.a.createElement("option",{value:"IT"},"Italy"),l.a.createElement("option",{value:"JM"},"Jamaica"),l.a.createElement("option",{value:"JP"},"Japan"),l.a.createElement("option",{value:"JE"},"Jersey"),l.a.createElement("option",{value:"JO"},"Jordan"),l.a.createElement("option",{value:"KZ"},"Kazakhstan"),l.a.createElement("option",{value:"KE"},"Kenya"),l.a.createElement("option",{value:"KI"},"Kiribati"),l.a.createElement("option",{value:"KP"},"Korea, Democratic People's Republic of"),l.a.createElement("option",{value:"KR"},"Korea, Republic of"),l.a.createElement("option",{value:"XK"},"Kosovo"),l.a.createElement("option",{value:"KW"},"Kuwait"),l.a.createElement("option",{value:"KG"},"Kyrgyzstan"),l.a.createElement("option",{value:"LA"},"Lao People's Democratic Republic"),l.a.createElement("option",{value:"LV"},"Latvia"),l.a.createElement("option",{value:"LB"},"Lebanon"),l.a.createElement("option",{value:"LS"},"Lesotho"),l.a.createElement("option",{value:"LR"},"Liberia"),l.a.createElement("option",{value:"LY"},"Libyan Arab Jamahiriya"),l.a.createElement("option",{value:"LI"},"Liechtenstein"),l.a.createElement("option",{value:"LT"},"Lithuania"),l.a.createElement("option",{value:"LU"},"Luxembourg"),l.a.createElement("option",{value:"MO"},"Macao"),l.a.createElement("option",{value:"MK"},"Macedonia, the Former Yugoslav Republic of"),l.a.createElement("option",{value:"MG"},"Madagascar"),l.a.createElement("option",{value:"MW"},"Malawi"),l.a.createElement("option",{value:"MY"},"Malaysia"),l.a.createElement("option",{value:"MV"},"Maldives"),l.a.createElement("option",{value:"ML"},"Mali"),l.a.createElement("option",{value:"MT"},"Malta"),l.a.createElement("option",{value:"MH"},"Marshall Islands"),l.a.createElement("option",{value:"MQ"},"Martinique"),l.a.createElement("option",{value:"MR"},"Mauritania"),l.a.createElement("option",{value:"MU"},"Mauritius"),l.a.createElement("option",{value:"YT"},"Mayotte"),l.a.createElement("option",{value:"MX"},"Mexico"),l.a.createElement("option",{value:"FM"},"Micronesia, Federated States of"),l.a.createElement("option",{value:"MD"},"Moldova, Republic of"),l.a.createElement("option",{value:"MC"},"Monaco"),l.a.createElement("option",{value:"MN"},"Mongolia"),l.a.createElement("option",{value:"ME"},"Montenegro"),l.a.createElement("option",{value:"MS"},"Montserrat"),l.a.createElement("option",{value:"MA"},"Morocco"),l.a.createElement("option",{value:"MZ"},"Mozambique"),l.a.createElement("option",{value:"MM"},"Myanmar"),l.a.createElement("option",{value:"NA"},"Namibia"),l.a.createElement("option",{value:"NR"},"Nauru"),l.a.createElement("option",{value:"NP"},"Nepal"),l.a.createElement("option",{value:"NL"},"Netherlands"),l.a.createElement("option",{value:"AN"},"Netherlands Antilles"),l.a.createElement("option",{value:"NC"},"New Caledonia"),l.a.createElement("option",{value:"NZ"},"New Zealand"),l.a.createElement("option",{value:"NI"},"Nicaragua"),l.a.createElement("option",{value:"NE"},"Niger"),l.a.createElement("option",{value:"NG"},"Nigeria"),l.a.createElement("option",{value:"NU"},"Niue"),l.a.createElement("option",{value:"NF"},"Norfolk Island"),l.a.createElement("option",{value:"MP"},"Northern Mariana Islands"),l.a.createElement("option",{value:"NO"},"Norway"),l.a.createElement("option",{value:"OM"},"Oman"),l.a.createElement("option",{value:"PK"},"Pakistan"),l.a.createElement("option",{value:"PW"},"Palau"),l.a.createElement("option",{value:"PS"},"Palestinian Territory, Occupied"),l.a.createElement("option",{value:"PA"},"Panama"),l.a.createElement("option",{value:"PG"},"Papua New Guinea"),l.a.createElement("option",{value:"PY"},"Paraguay"),l.a.createElement("option",{value:"PE"},"Peru"),l.a.createElement("option",{value:"PH"},"Philippines"),l.a.createElement("option",{value:"PN"},"Pitcairn"),l.a.createElement("option",{value:"PL"},"Poland"),l.a.createElement("option",{value:"PT"},"Portugal"),l.a.createElement("option",{value:"PR"},"Puerto Rico"),l.a.createElement("option",{value:"QA"},"Qatar"),l.a.createElement("option",{value:"RE"},"Reunion"),l.a.createElement("option",{value:"RO"},"Romania"),l.a.createElement("option",{value:"RU"},"Russian Federation"),l.a.createElement("option",{value:"RW"},"Rwanda"),l.a.createElement("option",{value:"BL"},"Saint Barthelemy"),l.a.createElement("option",{value:"SH"},"Saint Helena"),l.a.createElement("option",{value:"KN"},"Saint Kitts and Nevis"),l.a.createElement("option",{value:"LC"},"Saint Lucia"),l.a.createElement("option",{value:"MF"},"Saint Martin"),l.a.createElement("option",{value:"PM"},"Saint Pierre and Miquelon"),l.a.createElement("option",{value:"VC"},"Saint Vincent and the Grenadines"),l.a.createElement("option",{value:"WS"},"Samoa"),l.a.createElement("option",{value:"SM"},"San Marino"),l.a.createElement("option",{value:"ST"},"Sao Tome and Principe"),l.a.createElement("option",{value:"SA"},"Saudi Arabia"),l.a.createElement("option",{value:"SN"},"Senegal"),l.a.createElement("option",{value:"RS"},"Serbia"),l.a.createElement("option",{value:"CS"},"Serbia and Montenegro"),l.a.createElement("option",{value:"SC"},"Seychelles"),l.a.createElement("option",{value:"SL"},"Sierra Leone"),l.a.createElement("option",{value:"SG"},"Singapore"),l.a.createElement("option",{value:"SX"},"Sint Maarten"),l.a.createElement("option",{value:"SK"},"Slovakia"),l.a.createElement("option",{value:"SI"},"Slovenia"),l.a.createElement("option",{value:"SB"},"Solomon Islands"),l.a.createElement("option",{value:"SO"},"Somalia"),l.a.createElement("option",{value:"ZA"},"South Africa"),l.a.createElement("option",{value:"GS"},"South Georgia and the South Sandwich Islands"),l.a.createElement("option",{value:"SS"},"South Sudan"),l.a.createElement("option",{value:"ES"},"Spain"),l.a.createElement("option",{value:"LK"},"Sri Lanka"),l.a.createElement("option",{value:"SD"},"Sudan"),l.a.createElement("option",{value:"SR"},"Suriname"),l.a.createElement("option",{value:"SJ"},"Svalbard and Jan Mayen"),l.a.createElement("option",{value:"SZ"},"Swaziland"),l.a.createElement("option",{value:"SE"},"Sweden"),l.a.createElement("option",{value:"CH"},"Switzerland"),l.a.createElement("option",{value:"SY"},"Syrian Arab Republic"),l.a.createElement("option",{value:"TW"},"Taiwan, Province of China"),l.a.createElement("option",{value:"TJ"},"Tajikistan"),l.a.createElement("option",{value:"TZ"},"Tanzania, United Republic of"),l.a.createElement("option",{value:"TH"},"Thailand"),l.a.createElement("option",{value:"TL"},"Timor-Leste"),l.a.createElement("option",{value:"TG"},"Togo"),l.a.createElement("option",{value:"TK"},"Tokelau"),l.a.createElement("option",{value:"TO"},"Tonga"),l.a.createElement("option",{value:"TT"},"Trinidad and Tobago"),l.a.createElement("option",{value:"TN"},"Tunisia"),l.a.createElement("option",{value:"TR"},"Turkey"),l.a.createElement("option",{value:"TM"},"Turkmenistan"),l.a.createElement("option",{value:"TC"},"Turks and Caicos Islands"),l.a.createElement("option",{value:"TV"},"Tuvalu"),l.a.createElement("option",{value:"UG"},"Uganda"),l.a.createElement("option",{value:"UA"},"Ukraine"),l.a.createElement("option",{value:"AE"},"United Arab Emirates"),l.a.createElement("option",{value:"GB"},"United Kingdom"),l.a.createElement("option",{value:"US"},"United States"),l.a.createElement("option",{value:"UM"},"United States Minor Outlying Islands"),l.a.createElement("option",{value:"UY"},"Uruguay"),l.a.createElement("option",{value:"UZ"},"Uzbekistan"),l.a.createElement("option",{value:"VU"},"Vanuatu"),l.a.createElement("option",{value:"VE"},"Venezuela"),l.a.createElement("option",{value:"VN"},"Viet Nam"),l.a.createElement("option",{value:"VG"},"Virgin Islands, British"),l.a.createElement("option",{value:"VI"},"Virgin Islands, U.s."),l.a.createElement("option",{value:"WF"},"Wallis and Futuna"),l.a.createElement("option",{value:"EH"},"Western Sahara"),l.a.createElement("option",{value:"YE"},"Yemen"),l.a.createElement("option",{value:"ZM"},"Zambia"),l.a.createElement("option",{value:"ZW"},"Zimbabwe"))),l.a.createElement("div",{className:m.a.actions},l.a.createElement("button",{className:m.a.button,type:"submit"},"Sign Up")),l.a.createElement("p",{onClick:e.onLogin},"Returning Customer.",l.a.createElement("br",null),"Want to Login...!"))},E=t(102),v=t.n(E);a.default=function(e){var a=Object(o.useState)(!0),t=Object(n.a)(a,2),i=t[0],r=t[1],c=function(){r(function(e){return!e})};return l.a.createElement("div",{className:v.a.user},l.a.createElement("div",null,i&&l.a.createElement(u,{onSignUp:c}),!i&&l.a.createElement(p,{onLogin:c})))}},98:function(e,a,t){e.exports={login:"UserLogin_login__3_CR8",input:"UserLogin_input__1AxFn",actions:"UserLogin_actions__89bbv",button:"UserLogin_button__23ImN",sgnbutton:"UserLogin_sgnbutton__2e_F6"}}}]);
//# sourceMappingURL=5.61a2ac6f.chunk.js.map