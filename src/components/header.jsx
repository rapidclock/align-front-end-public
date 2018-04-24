import React from 'react';
import '../containers/css/Header.css';

class Header extends React.Component {
	render() {
		// react has crappy support for svg so styling had to be here
		var svgString = '<svg version="1.1" id="ccis_logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500px" height="78px" x="0px" y="0px" viewBox="0 0 500 78" style="enable-background:new 0 0 500 78;" xml:space="preserve" preserveAspectRatio="xMinYMin slice"><style type="text/css">.st0{fill:#E11A2C;}.st1{fill:#615445;}</style><g class="st0"><path d="M7.889,4.246v23.446c0,3.456,0.729,5.392,6.07,5.545v1.154H1.034v-1.154c5.702-0.257,5.6-2.612,5.6-5.545 V9.738c0-6.646-0.367-7.115-5.127-7.115V1.472h9.42l19.627,26.063V7.595c0-2.777-0.367-4.919-5.914-4.972V1.472h12.557v1.151 c-5.073,0.469-5.389,2.249-5.389,5.338v27.214h-0.729L7.889,4.246z"></path><path d="M47.872,12.618c6.175,0,11.201,4.657,11.201,11.305c0,7.436-5.597,11.305-11.201,11.305 c-5.393,0-11.149-3.612-11.149-11.358C36.723,17.381,41.643,12.618,47.872,12.618z M47.872,33.975c4.817,0,6.961-3.299,6.961-9.892 c0-5.657-1.517-10.21-6.961-10.21c-5.282,0-6.906,4.45-6.906,10.157C40.967,30.729,43.111,33.975,47.872,33.975z"></path><path d="M68.391,27.223c0,5.336,0,6.014,3.087,6.014h0.733v1.154h-11.1v-1.154c3.616,0,3.616-0.207,3.616-6.014v-5.917 c0-5.81,0-6.02-3.616-6.02v-1.148c2.361-0.316,5.079-1.154,5.915-1.414l0.367-0.106c0.26,0.838,0.733,2.514,0.733,5.495 c1.622-3.875,5.393-5.495,8.062-5.495c2.722,0,4.027,1.939,4.027,3.19c0,0.947-0.676,1.883-1.777,1.883 c-1.154,0-1.728-0.779-2.042-1.67c-0.208-0.576-0.629-1.57-1.83-1.57c-2.095,0-6.177,2.511-6.177,7.852V27.223z"></path><path d="M88.694,14.607v12.669c0,2.877,0,6.174,3.14,6.174c1.781,0,2.722-1.414,3.192-2.089l0.786,0.464 c-1.623,3.405-4.972,3.405-5.336,3.405c-1.467,0-2.617-0.316-3.457-0.997c-1.362-1.042-1.989-2.983-1.989-6.068V14.607h-3.036 v-1.151c2.306-0.106,5.079-1.623,5.865-6.542h0.835v6.542h6.332v1.151H88.694z"></path><path d="M119.576,27.223c0,5.757,0,6.014,3.558,6.014v1.154h-10.837v-1.154c3.612,0,3.612-0.257,3.612-6.014v-6.755 c0-4.866-1.464-6.282-4.551-6.282c-2.408,0-4.711,2.467-6.386,4.612v8.425c0,5.601,0,6.014,3.296,6.014v1.154H97.641v-1.154 c3.665,0,3.665-0.207,3.665-6.014V8.118c0-3.665,0-4.869-3.453-4.869V2.101c2.144,0,5.023-0.472,6.698-1.101h0.367v15.962 c2.616-2.777,4.919-4.344,7.642-4.344c4.655,0,7.016,2.461,7.016,7.221V27.223z"></path><path d="M128.311,21.463c-0.053,0.472-0.103,1.207-0.103,1.57c0,6.651,2.092,10.839,7.167,10.839 c2.935,0,5.291-1.313,6.753-4.187h1.204c-1.309,3.45-4.394,5.545-8.635,5.545c-5.864,0-10.731-4.394-10.731-11.146 c0-6.492,4.242-11.465,10.525-11.465c5.911,0,8.897,3.872,9.054,8.844H128.311z M128.418,20.418h11.201 c-0.053-2.461-0.733-6.646-5.234-6.646C130.247,13.772,128.677,17.538,128.418,20.418z"></path><path d="M170.461,28.164h0.994c0.521,2.511,2.352,5.914,7.17,5.914c4.345,0,4.866-2.671,4.866-3.718 c0-2.564-2.721-3.766-6.016-4.972c-4.817-1.777-6.963-3.296-6.963-6.961c0-2.665,1.99-5.808,6.699-5.808 c2.458,0,4.243,0.994,5.442,2.201c0.423-0.475,0.944-1.729,0.997-1.835h0.939v6.489h-0.939c-0.472-2.405-2.567-5.702-6.28-5.702 c-3.405,0-4.553,1.673-4.553,3.19c0,2.461,1.989,3.349,5.808,4.713c4.187,1.467,7.382,3.19,7.382,7.378 c0,3.559-2.569,6.177-7.332,6.177c-3.087,0-4.917-1.204-6.123-2.352c-0.522,0.573-0.992,1.671-1.096,2.143h-0.994V28.164z"></path><path d="M195.582,14.607v12.669c0,2.877,0,6.174,3.138,6.174c1.782,0,2.724-1.414,3.193-2.089l0.786,0.464 c-1.623,3.405-4.974,3.405-5.34,3.405c-1.464,0-2.618-0.316-3.453-0.997c-1.362-1.042-1.993-2.983-1.993-6.068V14.607h-3.034 v-1.151c2.305-0.106,5.076-1.623,5.862-6.542h0.84v6.542h6.331v1.151H195.582z"></path><path d="M208.246,21.463c-0.052,0.472-0.105,1.207-0.105,1.57c0,6.651,2.095,10.839,7.174,10.839 c2.926,0,5.283-1.313,6.746-4.187h1.205c-1.307,3.45-4.397,5.545-8.636,5.545c-5.862,0-10.729-4.394-10.729-11.146 c0-6.492,4.239-11.465,10.52-11.465c5.914,0,8.895,3.872,9.052,8.844H208.246z M208.352,20.418h11.198 c-0.053-2.461-0.733-6.646-5.234-6.646C210.183,13.772,208.614,17.538,208.352,20.418z"></path><path d="M233.051,27.223c0,5.336,0,6.014,3.09,6.014h0.733v1.154h-11.096v-1.154c3.612,0,3.612-0.207,3.612-6.014 v-5.917c0-5.81,0-6.02-3.612-6.02v-1.148c2.352-0.316,5.076-1.154,5.915-1.414l0.366-0.106c0.261,0.838,0.73,2.514,0.73,5.495 c1.622-3.875,5.389-5.495,8.062-5.495c2.72,0,4.031,1.939,4.031,3.19c0,0.947-0.68,1.883-1.781,1.883 c-1.15,0-1.725-0.779-2.038-1.67c-0.212-0.576-0.631-1.57-1.834-1.57c-2.095,0-6.179,2.511-6.179,7.852V27.223z"></path><path d="M253.15,12.618c0.415,1.204,0.631,3.243,0.68,4.344c2.666-2.93,5.021-4.344,8.058-4.344 c4.813,0,6.545,3.349,6.545,6.855v7.749c0,5.704,0,6.014,3.453,6.014v1.154h-10.731v-1.154c3.611,0,3.611-0.31,3.611-6.014v-6.755 c0-4.76-1.675-6.282-4.235-6.282c-2.983,0-4.924,2.517-6.7,4.506v8.531c0,5.654,0,6.014,3.457,6.014v1.154h-10.573v-1.154 c3.451,0,3.451-0.31,3.451-6.014v-6.23c0-5.707,0-6.02-3.451-6.02v-1.151c2.144-0.313,4.866-0.838,5.755-1.204H253.15z"></path><path d="M355.643,5.964c0,1.254-1.018,2.266-2.261,2.266c-1.253,0-2.261-1.011-2.261-2.266 c0-1.246,1.009-2.26,2.261-2.26C354.625,3.704,355.643,4.718,355.643,5.964z"></path><path d="M454.319,5.964c0,1.254-1.017,2.266-2.261,2.266c-1.251,0-2.261-1.011-2.261-2.266 c0-1.246,1.01-2.26,2.261-2.26C453.302,3.704,454.319,4.718,454.319,5.964z"></path><path d="M167.39,30.572c-0.419,2.455-1.493,2.606-2.117,2.606c-1.623,0-1.652-1.151-1.652-4.755v-8.478 c0-3.09-0.401-7.327-7.624-7.327c-5.234,0-8.427,2.668-8.427,4.763c0,0.941,0.575,1.517,1.416,1.517 c1.356,0,1.883-0.994,2.196-2.143c0.363-1.416,1.154-2.983,4.5-2.983c3.925,0,4.398,2.509,4.398,5.598v1.305l-3.979,1.366 c-7.38,2.511-9.631,5.442-9.631,8.425c0,2.983,2.356,4.447,5.393,4.447c2.511,0,5.127-1.042,8.217-3.665 c0.261,1.257,0.941,3.665,4.009,3.665c2.882,0,4.136-1.986,4.242-4.341H167.39z M160.081,30.083 c-2.111,1.824-4.954,3.271-6.89,3.271c-2.221,0-3.305-1.606-3.305-3.539c0-2.891,2.738-5.52,7.174-6.97l3.021-0.958V30.083z"></path><path d="M321.482,1.441v1.151c-5.079,0.366-5.079,3.036-5.079,7.327v9.789c0,4.556,0,6.808-1.358,9.316 c-1.834,3.352-5.971,5.97-12.199,5.97c-7.17,0-10.361-3.09-11.723-5.079c-1.728-2.564-1.728-4.975-1.728-10.836v-8.897 c0-7.012-0.049-7.59-4.655-7.59h-0.786V1.441h14.968v1.151c-5.181,0-5.336,0-5.336,7.487v9.16c0,4.972,0,7.744,1.305,9.942 c1.205,2.042,4.084,4.084,9.057,4.084c3.351,0,7.484-1.204,9.738-4.713c1.462-2.249,1.462-4.654,1.462-9.054V9.453 c0-4.19,0-6.495-5.282-6.861V1.441H321.482z"></path><path d="M327.181,12.59c0.421,1.204,0.629,3.246,0.686,4.347c2.665-2.933,5.026-4.347,8.058-4.347 c4.815,0,6.542,3.352,6.542,6.855v7.749c0,5.704,0,6.017,3.457,6.017v1.154h-10.733v-1.154c3.611,0,3.611-0.313,3.611-6.017V20.44 c0-4.76-1.675-6.28-4.235-6.28c-2.988,0-4.924,2.514-6.7,4.5v8.534c0,5.654,0,6.017,3.451,6.017v1.154h-10.573v-1.154 c3.457,0,3.457-0.313,3.457-6.017v-6.232c0-5.702,0-6.014-3.457-6.014v-1.154c2.144-0.316,4.868-0.838,5.756-1.204H327.181z"></path><path d="M355.601,29.234c0,3.349,0.314,3.978,2.877,3.978h0.786v1.154h-11.148v-1.154h0.888 c2.671,0,3.192-0.419,3.192-3.978v-8.372c0-5.707-0.314-5.76-4.08-5.76v-1.148c1.569-0.053,4.76-0.735,6.961-1.363h0.522V29.234z"></path><path d="M371.143,35.201l-7.431-16.75c-1.36-3.037-1.883-3.766-3.819-3.872v-1.148h9.42v1.148 c-1.362,0-2.666,0-2.666,1.257c0,0.209,0.049,0.578,0.571,1.777l6.073,13.663l5.079-11.356c0.73-1.676,1.203-2.83,1.203-3.506 c0-1.573-1.626-1.782-2.567-1.835v-1.148h7.068v1.148c-2.201,0.159-3.037,2.095-4.658,5.654l-6.804,14.968H371.143z"></path><path d="M388.679,21.437c-0.057,0.472-0.106,1.201-0.106,1.567c0,6.648,2.091,10.839,7.17,10.839 c2.932,0,5.287-1.313,6.75-4.19h1.203c-1.309,3.453-4.394,5.548-8.633,5.548c-5.862,0-10.729-4.394-10.729-11.149 c0-6.489,4.239-11.462,10.52-11.462c5.914,0,8.899,3.872,9.054,8.847H388.679z M388.781,20.39h11.201 c-0.053-2.458-0.733-6.649-5.234-6.649C390.611,13.741,389.042,17.51,388.781,20.39z"></path><path d="M414.114,27.195c0,5.335,0,6.017,3.085,6.017h0.733v1.154h-11.099v-1.154c3.615,0,3.615-0.207,3.615-6.017 v-5.914c0-5.813,0-6.02-3.615-6.02v-1.154c2.36-0.313,5.078-1.151,5.918-1.414l0.363-0.103c0.265,0.841,0.737,2.511,0.737,5.495 c1.623-3.872,5.389-5.495,8.059-5.495c2.722,0,4.031,1.936,4.031,3.193c0,0.941-0.68,1.886-1.785,1.886 c-1.145,0-1.725-0.785-2.038-1.673c-0.208-0.581-0.629-1.57-1.835-1.57c-2.094,0-6.171,2.511-6.171,7.847V27.195z"></path><path d="M427.875,28.136h0.994c0.522,2.511,2.356,5.911,7.171,5.911c4.345,0,4.866-2.665,4.866-3.713 c0-2.564-2.718-3.771-6.016-4.972c-4.815-1.779-6.966-3.299-6.966-6.964c0-2.668,1.992-5.808,6.7-5.808 c2.458,0,4.239,0.994,5.446,2.198c0.416-0.469,0.941-1.726,0.995-1.832h0.941v6.489h-0.941c-0.474-2.405-2.567-5.704-6.281-5.704 c-3.404,0-4.553,1.673-4.553,3.196c0,2.458,1.985,3.347,5.809,4.707c4.186,1.467,7.382,3.196,7.382,7.381 c0,3.559-2.569,6.176-7.329,6.176c-3.09,0-4.921-1.201-6.123-2.352c-0.525,0.575-0.997,1.671-1.101,2.145h-0.994V28.136z"></path><path d="M454.255,29.234c0,3.349,0.31,3.978,2.875,3.978h0.786v1.154h-11.147v-1.154h0.888 c2.673,0,3.196-0.419,3.196-3.978v-8.372c0-5.707-0.318-5.76-4.084-5.76v-1.148c1.568-0.053,4.764-0.735,6.961-1.363h0.525V29.234z "></path><path d="M466.602,14.579v12.666c0,2.88,0,6.179,3.139,6.179c1.782,0,2.724-1.413,3.196-2.095l0.786,0.472 c-1.626,3.4-4.973,3.4-5.343,3.4c-1.464,0-2.618-0.313-3.453-0.994c-1.362-1.048-1.989-2.983-1.989-6.07V14.579h-3.036v-1.148 c2.302-0.106,5.079-1.623,5.861-6.542h0.839v6.542h6.334v1.148H466.602z"></path><path d="M493.766,17.985c0.363-0.841,0.733-1.623,0.733-2.042c0-1.101-1.887-1.363-2.828-1.363v-1.148H499v1.148 c-2.618,0.159-3.143,1.466-4.447,4.606l-9.322,22.507c-1.358,3.246-2.613,5.546-4.651,5.546c-0.844,0-1.626-0.523-1.626-1.518 c0-1.729,1.728-2.514,2.669-2.93c1.781-0.788,2.352-1.098,3.085-2.93l1.989-4.972l-7.85-16.856c-1.203-2.564-1.623-3.4-4.08-3.453 v-1.148h9.628v1.148c-1.309,0.106-2.564,0.159-2.564,1.048c0,0.419,0.629,1.724,0.999,2.564l5.756,12.25L493.766,17.985z"></path></g><g class="st1"><path d="M14.023,64.123c-0.232,3.933-1.777,7.547-6.322,7.547C1.786,71.669,1,66.105,1,60.86 c0-5.243,0.962-10.808,6.702-10.808c4.253,0,6.031,2.389,6.147,6.467h-2.68c-0.059-2.361-0.816-4.37-3.467-4.37 c-3.555,0-4.021,3.904-4.021,8.712c0,4.808,0.466,8.712,4.021,8.712c3.118,0,3.555-2.914,3.641-5.449H14.023z"></path><path d="M21.478,55.237c4.516,0,5.623,3.817,5.623,8.216c0,4.4-1.137,8.217-5.623,8.217 c-4.516,0-5.623-3.817-5.623-8.217C15.855,59.054,16.99,55.237,21.478,55.237z M24.537,63.452c0-3.379-0.496-6.292-3.118-6.292 c-2.476,0-3,2.914-3,6.292c0,3.38,0.494,6.294,3,6.294C24.013,69.746,24.537,66.833,24.537,63.452z"></path><path d="M29.981,50.46h2.447v10.434v10.368h-2.447V60.894V50.46z"></path><path d="M36.214,50.46h2.447v10.379v10.423h-2.447V60.786V50.46z"></path><path d="M44.339,63.746c0,2.389,0,6.001,3.002,6.001c2.331,0,2.651-2.447,2.651-3.612h2.447 c0,1.659-0.99,5.535-5.243,5.535c-3.817,0-5.419-2.651-5.419-8.013c0-3.903,0.757-8.42,5.565-8.42c4.778,0,5.215,4.167,5.215,7.517 v0.992H44.339z M49.991,61.821v-0.844c0-1.749-0.553-3.817-2.71-3.817c-2.563,0-2.855,3.147-2.855,4.08v0.581H49.991z"></path><path d="M65.808,70.271c0,4.662-2.157,6.351-5.303,6.351c-0.961,0-4.72,0-5.128-3.904h2.447 c0.117,1.427,1.224,1.981,2.506,1.981c3.147,0,3.029-2.418,3.029-3.495v-2.041h-0.057c-0.525,1.312-1.982,2.098-3.525,2.098 c-4.545,0-4.837-5.739-4.837-7.809c0-4.224,1.137-8.216,5.098-8.216c1.69,0,3.06,1.165,3.38,2.39h0.059v-1.982h2.331V70.271z  M57.504,63.452c0,2.536,0.378,5.711,2.826,5.711c2.651,0,3.176-2.506,3.176-5.711c0-3.028-0.525-6.118-3.147-6.118 C58.087,57.335,57.504,59.723,57.504,63.452z"></path><path d="M71.338,63.746c0,2.389,0,6.001,3.002,6.001c2.331,0,2.651-2.447,2.651-3.612h2.447 c0,1.659-0.99,5.535-5.244,5.535c-3.817,0-5.419-2.651-5.419-8.013c0-3.903,0.757-8.42,5.565-8.42c4.778,0,5.215,4.167,5.215,7.517 v0.992H71.338z M76.99,61.821v-0.844c0-1.749-0.553-3.817-2.71-3.817c-2.563,0-2.855,3.147-2.855,4.08v0.581H76.99z"></path><path d="M94.377,55.237c4.516,0,5.623,3.817,5.623,8.216c0,4.4-1.137,8.217-5.623,8.217 c-4.516,0-5.623-3.817-5.623-8.217C88.754,59.054,89.889,55.237,94.377,55.237z M97.436,63.452c0-3.379-0.496-6.292-3.117-6.292 c-2.477,0-3,2.914-3,6.292c0,3.38,0.494,6.294,3,6.294C96.912,69.746,97.436,66.833,97.436,63.452z"></path><path d="M103.463,57.568h-2.273v-1.923h2.273v-1.835c0-2.361,1.02-3.584,3.379-3.584h1.778v2.098h-1.137 c-1.049,0-1.573,0.408-1.573,1.486v1.835h2.68v1.923h-2.68v13.694h-2.447V57.568z"></path><path d="M130.379,64.123c-0.232,3.933-1.777,7.547-6.322,7.547c-5.915,0-6.702-5.565-6.702-10.809 c0-5.243,0.962-10.808,6.702-10.808c4.253,0,6.031,2.389,6.147,6.467h-2.68c-0.059-2.361-0.816-4.37-3.467-4.37 c-3.555,0-4.021,3.904-4.021,8.712c0,4.808,0.467,8.712,4.021,8.712c3.118,0,3.555-2.914,3.641-5.449H130.379z"></path><path d="M137.833,55.237c4.516,0,5.623,3.817,5.623,8.216c0,4.4-1.137,8.217-5.623,8.217 c-4.516,0-5.623-3.817-5.623-8.217C132.21,59.054,133.345,55.237,137.833,55.237z M140.892,63.452c0-3.379-0.496-6.292-3.118-6.292 c-2.477,0-3,2.914-3,6.292c0,3.38,0.494,6.294,3,6.294C140.368,69.746,140.892,66.833,140.892,63.452z"></path><path d="M146.422,55.645h2.331v1.835h0.059c0.641-1.428,2.272-2.243,3.787-2.243c1.807,0,2.884,0.7,3.38,2.478 c0.7-1.37,2.098-2.478,3.7-2.478c4.108,0,4.108,3.118,4.108,4.953v11.072h-2.447v-10.78c0-1.194-0.087-3.147-2.098-3.147 c-1.136,0-2.914,0.7-2.914,3.147v10.78h-2.447v-10.78c0-1.194-0.087-3.147-2.098-3.147c-1.135,0-2.914,0.7-2.914,3.147v10.78 h-2.447V55.645z"></path><path d="M167.508,55.645h2.331v1.923h0.059c0.32-1.166,1.69-2.331,3.379-2.331c3.701,0,5.1,3.294,5.1,7.925 c0,3.555-1.049,8.508-5.1,8.508c-1.398,0-2.708-0.845-3.263-2.186h-0.059v6.906h-2.447V55.645z M172.957,69.572 c2.273,0,2.855-2.39,2.855-6.41c0-3.439-0.582-5.827-2.855-5.827c-2.71,0-3.147,2.564-3.147,6.118 C169.81,66.483,170.335,69.572,172.957,69.572z"></path><path d="M191.57,71.262h-2.331v-1.835h-0.059c-0.641,1.428-2.273,2.243-3.788,2.243c-4.108,0-4.108-3.118-4.108-4.953 V55.645h2.447v10.78c0,1.196,0.088,3.147,2.302,3.147c1.312,0,3.088-0.873,3.088-3.147v-10.78h2.448V71.262z"></path><path d="M195.79,51.1h2.447v4.545h2.71v1.923h-2.71v10.022c0,1.254,0.32,1.749,1.602,1.749 c0.525,0,0.816-0.059,1.078-0.087v2.01c-0.32,0.057-0.961,0.175-1.981,0.175c-2.535,0-3.147-1.049-3.147-3.088v-10.78h-2.273 v-1.923h2.273V51.1z"></path><path d="M204.934,63.746c0,2.389,0,6.001,3.002,6.001c2.331,0,2.651-2.447,2.651-3.612h2.447 c0,1.659-0.99,5.535-5.243,5.535c-3.817,0-5.419-2.651-5.419-8.013c0-3.903,0.757-8.42,5.565-8.42c4.778,0,5.215,4.167,5.215,7.517 v0.992H204.934z M210.587,61.821v-0.844c0-1.749-0.553-3.817-2.71-3.817c-2.563,0-2.855,3.147-2.855,4.08v0.581H210.587z"></path><path d="M216.118,55.645h2.447v2.331h0.059c0.7-1.485,1.631-2.739,3.38-2.739c0.494,0,0.845,0.059,1.078,0.176v2.388 c-0.233-0.029-0.525-0.117-1.312-0.117c-1.224,0-3.206,1.108-3.206,3.701v9.876h-2.447V55.645z"></path><path d="M231.642,60.366c0-3.555,1.515-5.129,5.245-5.129c4.749,0,4.749,2.855,4.749,4.486v8.713 c0,0.64,0,1.251,0.757,1.251c0.321,0,0.466-0.057,0.582-0.145v1.749c-0.175,0.028-0.816,0.145-1.427,0.145 c-0.932,0-2.098,0-2.214-2.01h-0.059c-0.786,1.398-2.302,2.243-3.759,2.243c-2.914,0-4.253-1.747-4.253-4.545 c0-2.186,0.932-3.7,2.943-4.312l3.292-0.992c1.777-0.553,1.777-1.048,1.777-2.359c0-1.457-0.874-2.302-2.506-2.302 c-2.68,0-2.68,2.506-2.68,3.06v0.145H231.642z M239.188,62.754c-0.904,0.961-3.06,1.165-4.166,1.835 c-0.786,0.496-1.194,1.108-1.194,2.476c0,1.574,0.553,2.68,2.214,2.68c1.602,0,3.147-1.369,3.147-2.972V62.754z"></path><path d="M245.243,55.645h2.331v1.835h0.059c0.641-1.428,2.273-2.243,3.787-2.243c4.109,0,4.109,3.118,4.109,4.953 v11.072h-2.449v-10.78c0-1.194-0.087-3.147-2.3-3.147c-1.312,0-3.09,0.874-3.09,3.147v10.78h-2.447V55.645z"></path><path d="M269.305,71.262h-2.331v-1.923h-0.059c-0.32,1.165-1.69,2.331-3.38,2.331c-3.7,0-5.098-3.292-5.098-8.217 c0-3.263,0.525-8.216,4.923-8.216c1.4,0,2.884,0.846,3.439,2.186h0.057V50.46h2.448V71.262z M263.857,69.572 c2.71,0,3.147-2.563,3.147-6.119c0-3.028-0.525-6.118-3.147-6.118c-2.273,0-2.855,2.388-2.855,6.118 C261.002,67.182,261.584,69.572,263.857,69.572z"></path><path d="M279.874,50.46h2.563v10.11v10.692h-2.563V60.624V50.46z"></path><path d="M286.019,55.645h2.331v1.835h0.059c0.641-1.428,2.273-2.243,3.787-2.243c4.109,0,4.109,3.118,4.109,4.953 v11.072h-2.448v-10.78c0-1.194-0.087-3.147-2.3-3.147c-1.312,0-3.09,0.874-3.09,3.147v10.78h-2.447V55.645z"></path><path d="M300.524,57.568h-2.272v-1.923h2.272v-1.835c0-2.361,1.02-3.584,3.379-3.584h1.778v2.098h-1.137 c-1.049,0-1.573,0.408-1.573,1.486v1.835h2.68v1.923h-2.68v13.694h-2.447V57.568z"></path><path d="M312.496,55.237c4.516,0,5.623,3.817,5.623,8.216c0,4.4-1.137,8.217-5.623,8.217 c-4.516,0-5.623-3.817-5.623-8.217C306.872,59.054,308.008,55.237,312.496,55.237z M315.555,63.452 c0-3.379-0.496-6.292-3.118-6.292c-2.476,0-3,2.914-3,6.292c0,3.38,0.494,6.294,3,6.294 C315.031,69.746,315.555,66.833,315.555,63.452z"></path><path d="M320.852,55.645h2.447v2.331h0.059c0.7-1.485,1.631-2.739,3.38-2.739c0.494,0,0.845,0.059,1.078,0.176v2.388 c-0.233-0.029-0.525-0.117-1.312-0.117c-1.224,0-3.206,1.108-3.206,3.701v9.876h-2.447V55.645z"></path><path d="M329.998,55.645h2.331v1.835h0.059c0.641-1.428,2.272-2.243,3.787-2.243c1.807,0,2.884,0.7,3.38,2.478 c0.7-1.37,2.098-2.478,3.7-2.478c4.108,0,4.108,3.118,4.108,4.953v11.072h-2.447v-10.78c0-1.194-0.087-3.147-2.098-3.147 c-1.135,0-2.914,0.7-2.914,3.147v10.78h-2.447v-10.78c0-1.194-0.087-3.147-2.098-3.147c-1.135,0-2.914,0.7-2.914,3.147v10.78 h-2.447V55.645z"></path><path d="M350.705,60.366c0-3.555,1.516-5.129,5.245-5.129c4.749,0,4.749,2.855,4.749,4.486v8.713 c0,0.64,0,1.251,0.757,1.251c0.321,0,0.467-0.057,0.582-0.145v1.749c-0.174,0.028-0.816,0.145-1.427,0.145 c-0.932,0-2.098,0-2.214-2.01h-0.059c-0.786,1.398-2.302,2.243-3.759,2.243c-2.914,0-4.253-1.747-4.253-4.545 c0-2.186,0.932-3.7,2.943-4.312l3.292-0.992c1.777-0.553,1.777-1.048,1.777-2.359c0-1.457-0.874-2.302-2.506-2.302 c-2.68,0-2.68,2.506-2.68,3.06v0.145H350.705z M358.252,62.754c-0.904,0.961-3.06,1.165-4.167,1.835 c-0.786,0.496-1.194,1.108-1.194,2.476c0,1.574,0.553,2.68,2.214,2.68c1.602,0,3.147-1.369,3.147-2.972V62.754z"></path><path d="M365.321,51.1h2.447v4.545h2.71v1.923h-2.71v10.022c0,1.254,0.32,1.749,1.602,1.749 c0.525,0,0.816-0.059,1.078-0.087v2.01c-0.32,0.057-0.961,0.175-1.981,0.175c-2.535,0-3.147-1.049-3.147-3.088v-10.78h-2.272 v-1.923h2.272V51.1z"></path><path d="M372.573,50.46h2.447v2.796h-2.447V50.46z M372.573,55.645h2.447v15.617h-2.447V55.645z"></path><path d="M383.525,55.237c4.516,0,5.623,3.817,5.623,8.216c0,4.4-1.137,8.217-5.623,8.217 c-4.516,0-5.623-3.817-5.623-8.217C377.901,59.054,379.037,55.237,383.525,55.237z M386.584,63.452 c0-3.379-0.496-6.292-3.118-6.292c-2.477,0-3,2.914-3,6.292c0,3.38,0.494,6.294,3,6.294 C386.06,69.746,386.584,66.833,386.584,63.452z"></path><path d="M391.882,55.645h2.331v1.835h0.059c0.641-1.428,2.272-2.243,3.787-2.243c4.109,0,4.109,3.118,4.109,4.953 v11.072h-2.449v-10.78c0-1.194-0.087-3.147-2.3-3.147c-1.311,0-3.09,0.874-3.09,3.147v10.78h-2.447V55.645z"></path><path d="M421.564,55.849c0-2.185-0.786-3.7-3.234-3.7c-2.157,0-3.439,1.166-3.439,3.38 c0,5.857,9.819,2.359,9.819,9.964c0,4.806-3.525,6.176-6.468,6.176c-4.865,0-6.292-2.506-6.292-6.935h2.563 c0,2.331,0.147,4.837,3.904,4.837c2.041,0,3.613-1.457,3.613-3.671c0-5.885-9.819-2.477-9.819-10.111 c0-1.922,0.816-5.738,6.09-5.738c3.963,0,5.769,1.981,5.827,5.797H421.564z"></path><path d="M434.931,60.393c0-1.514-0.612-3.233-2.477-3.233c-1.514,0-3.059,0.758-3.059,6.468 c0,2.039,0.029,6.118,2.972,6.118c2.098,0,2.563-2.214,2.563-3.904h2.448c0,2.476-1.224,5.827-5.129,5.827 c-3.816,0-5.419-2.651-5.419-8.013c0-3.903,0.758-8.42,5.566-8.42c4.253,0,4.982,3.351,4.982,5.157H434.931z"></path><path d="M440.348,50.46h2.447v2.796h-2.447V50.46z M440.348,55.645h2.447v15.617h-2.447V55.645z"></path><path d="M448.473,63.746c0,2.389,0,6.001,3.002,6.001c2.331,0,2.651-2.447,2.651-3.612h2.447 c0,1.659-0.99,5.535-5.243,5.535c-3.817,0-5.419-2.651-5.419-8.013c0-3.903,0.757-8.42,5.565-8.42c4.778,0,5.215,4.167,5.215,7.517 v0.992H448.473z M454.125,61.821v-0.844c0-1.749-0.553-3.817-2.71-3.817c-2.563,0-2.855,3.147-2.855,4.08v0.581H454.125z"></path><path d="M459.656,55.645h2.331v1.835h0.059c0.641-1.428,2.273-2.243,3.787-2.243c4.109,0,4.109,3.118,4.109,4.953 v11.072h-2.448v-10.78c0-1.194-0.087-3.147-2.3-3.147c-1.312,0-3.09,0.874-3.09,3.147v10.78h-2.447V55.645z"></path><path d="M480.862,60.393c0-1.514-0.612-3.233-2.477-3.233c-1.514,0-3.059,0.758-3.059,6.468 c0,2.039,0.029,6.118,2.972,6.118c2.098,0,2.563-2.214,2.563-3.904h2.448c0,2.476-1.224,5.827-5.129,5.827 c-3.816,0-5.419-2.651-5.419-8.013c0-3.903,0.758-8.42,5.566-8.42c4.253,0,4.982,3.351,4.982,5.157H480.862z"></path><path d="M488.171,63.746c0,2.389,0,6.001,3.002,6.001c2.331,0,2.651-2.447,2.651-3.612h2.447 c0,1.659-0.99,5.535-5.243,5.535c-3.817,0-5.419-2.651-5.419-8.013c0-3.903,0.757-8.42,5.565-8.42c4.778,0,5.215,4.167,5.215,7.517 v0.992H488.171z M493.824,61.821v-0.844c0-1.749-0.553-3.817-2.71-3.817c-2.563,0-2.855,3.147-2.855,4.08v0.581H493.824z"></path></g></svg>';

		return(
			<div id="header_main_container">
				<div id="header_logo">
					<a href="https://www.ccis.northeastern.edu/" target="">
						<div id="header_logo_svg" dangerouslySetInnerHTML={{ __html: svgString}} />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
