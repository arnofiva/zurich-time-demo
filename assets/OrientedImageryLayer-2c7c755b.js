import{ah as t,ai as e,ak as x,ao as q,co as M,f3 as A,ck as k,cg as V,fw as _,av as Z}from"./index-5b8adf8e.js";import B from"./FeatureLayer-f16366de.js";import"./FeatureLayerBase-e07f2f14.js";import"./LayerFloorInfo-b494a401.js";import"./serviceCapabilitiesUtils-3ac061d0.js";import"./editsZScale-e3d24fbf.js";import"./queryZScale-c917a291.js";import"./FeatureSet-04b2b8c3.js";import"./APIKeyMixin-90b32f33.js";import"./EditBusLayer-b09fc428.js";import"./OrderedLayer-8532bad2.js";import"./FeatureTemplate-b7e0da9d.js";import"./FeatureType-a8ae05f2.js";import"./versionUtils-202bc3bf.js";import"./TopFeaturesQuery-a462936c.js";const G=[2155,2194,2204,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2233,2234,2235,2236,2237,2238,2239,2240,2241,2242,2243,2244,2245,2246,2247,2248,2249,2250,2251,2252,2253,2254,2255,2256,2257,2258,2259,2260,2261,2262,2263,2264,2265,2266,2267,2268,2269,2270,2271,2272,2273,2274,2275,2276,2277,2278,2279,2280,2281,2282,2283,2284,2285,2286,2287,2288,2289,2314,2867,2868,2869,2870,2871,2872,2873,2874,2875,2876,2877,2878,2879,2880,2881,2882,2883,2884,2885,2886,2887,2888,2889,2890,2891,2892,2893,2894,2895,2896,2897,2898,2899,2900,2901,2902,2903,2904,2905,2906,2907,2908,2909,2910,2911,2912,2913,2914,2915,2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2964,2965,2966,2967,2968,2992,2994,3080,3089,3091,3102,3359,3359,3361,3363,3365,3366,3404,3407,3417,3418,3419,3420,3421,3422,3423,3424,3425,3426,3427,3428,3429,3430,3431,3432,3433,3434,3435,3436,3437,3438,3441,3442,3443,3444,3445,3446,3451,3452,3453,3454,3455,3456,3457,3458,3459,3479,3481,3483,3485,3487,3490,3492,3494,3496,3498,3500,3502,3504,3506,3508,3510,3512,3515,3517,3519,3521,3523,3525,3527,3529,3531,3533,3535,3537,3539,3541,3543,3545,3547,3549,3551,3553,3560,3561,3562,3563,3564,3565,3566,3567,3568,3569,3570,3582,3584,3586,3588,3590,3593,3598,3600,3605,3608,3610,3612,3614,3616,3618,3620,3622,3624,3626,3628,3630,3632,3634,3636,3640,3642,3644,3646,3648,3650,3652,3654,3656,3658,3660,3662,3664,3668,3670,3672,3674,3676,3677,3679,3680,3682,3683,3686,3688,3690,3692,3696,3698,3700,3728,3729,3730,3731,3732,3733,3734,3735,3736,3737,3738,3739,3753,3754,3755,3756,3757,3758,3759,3760,3991,3992,4217,4399,4400,4401,4402,4403,4404,4405,4406,4407,4408,4409,4410,4411,4412,4413,4418,4419,4420,4421,4422,4423,4424,4425,4426,4427,4428,4429,4430,4431,4432,4433,4438,4439,4455,4456,4457,5466,5588,5589,5623,5624,5625,5646,5654,5655,6128,6129,6141,6200,6201,6202,6391,6405,6407,6409,6411,6413,6416,6418,6420,6422,6424,6426,6428,6430,6432,6434,6436,6438,6441,6443,6445,6447,6449,6451,6453,6455,6457,6459,6461,6463,6465,6467,6469,6471,6473,6475,6477,6479,6484,6486,6488,6490,6492,6494,6496,6499,6501,6503,6505,6507,6510,6515,6517,6519,6521,6523,6525,6527,6529,6531,6533,6535,6537,6539,6541,6543,6545,6547,6549,6551,6553,6555,6557,6559,6561,6563,6565,6568,6570,6572,6574,6576,6578,6582,6584,6586,6588,6590,6593,6595,6597,6599,6601,6603,6605,6607,6609,6612,6614,6616,6618,6625,6626,6627,6633,6785,6787,6789,6791,6793,6795,6797,6799,6801,6803,6805,6807,6809,6811,6813,6815,6817,6819,6821,6823,6825,6827,6829,6831,6833,6835,6837,6839,6841,6843,6845,6847,6849,6851,6853,6855,6857,6859,6861,6863,6868,6880,6885,6887,6923,6925,6966,6997,7057,7058,7059,7060,7061,7062,7063,7064,7065,7066,7067,7068,7069,7070,7119,7120,7121,7122,7123,7124,7125,7126,7127,7128,7132,7258,7260,7262,7264,7266,7268,7270,7272,7274,7276,7278,7280,7282,7284,7286,7288,7290,7292,7294,7296,7298,7300,7302,7304,7306,7308,7310,7312,7314,7316,7318,7320,7322,7324,7326,7328,7330,7332,7334,7336,7338,7340,7342,7344,7346,7348,7350,7352,7354,7356,7358,7360,7362,7364,7366,7368,7370,7558,7587,7588,7589,7590,7591,7592,7593,7594,7595,7596,7597,7598,7599,7600,7601,7602,7603,7604,7605,7606,7607,7608,7609,7610,7611,7612,7613,7614,7615,7616,7617,7618,7619,7620,7621,7622,7623,7624,7625,7626,7627,7628,7629,7630,7631,7632,7633,7634,7635,7636,7637,7638,7639,7640,7641,7642,7643,7644,7645,24100,26729,26730,26731,26732,26733,26734,26735,26736,26737,26738,26739,26740,26741,26742,26743,26744,26745,26746,26747,26748,26749,26750,26751,26752,26753,26754,26755,26756,26757,26758,26759,26760,26766,26767,26768,26769,26770,26771,26772,26773,26774,26775,26776,26777,26778,26779,26780,26781,26782,26783,26784,26785,26786,26787,26791,26792,26793,26794,26795,26796,26797,26798,26799,26801,26802,26803,26811,26812,26813,26814,26815,26819,26820,26821,26822,26825,26826,26830,26831,26832,26833,26836,26837,26841,26842,26843,26844,26847,26848,26849,26850,26851,26852,26853,26854,26855,26856,26857,26858,26859,26860,26861,26862,26863,26864,26865,26866,26867,26868,26869,26870,32001,32002,32003,32005,32006,32007,32008,32009,32010,32011,32012,32013,32014,32015,32016,32017,32018,32019,32020,32021,32022,32023,32024,32025,32026,32027,32028,32029,32030,32031,32033,32034,32035,32036,32037,32038,32039,32040,32041,32042,32043,32044,32045,32046,32047,32048,32049,32050,32051,32052,32053,32054,32055,32056,32057,32058,32064,32065,32066,32067,32074,32075,32076,32077,32099,32164,32165,32166,32167,32664,32665,32666,32667,65061,102120,102121,102629,102630,102631,102632,102633,102634,102635,102636,102637,102638,102639,102640,102641,102642,102643,102644,102645,102646,102648,102649,102650,102651,102652,102653,102654,102655,102656,102657,102658,102659,102660,102661,102662,102663,102664,102665,102666,102667,102668,102669,102670,102671,102672,102673,102674,102675,102676,102677,102678,102679,102680,102681,102682,102683,102684,102685,102686,102687,102688,102689,102690,102691,102692,102693,102694,102695,102696,102697,102698,102700,102704,102707,102708,102709,102710,102711,102712,102713,102714,102715,102716,102717,102718,102719,102720,102721,102722,102723,102724,102725,102726,102727,102728,102729,102730,102733,102734,102735,102736,102737,102738,102739,102740,102741,102742,102743,102744,102745,102746,102747,102748,102749,102750,102751,102752,102753,102754,102755,102756,102757,102758,102761,102766],J=[5614,5702,6130,6131,6132,6358,6359,6360],Q=[115700,4326];function Y(o){return G.includes(o)?"feet":"meters"}function X(o,i){return typeof o=="number"?J.includes(o)?"feet":"meters":Y(i)}function tt(o,i){return Q.includes(o)||i===4326?"ellipsoidal":"gravity-related-height"}let v=class extends q{get isAdvanced(){return!1}getInfo(){const{horizontalWKID:i,verticalWKID:n}=this;let s=i,y=n;const c=this;if(c.type===4){const{properties:m}=c;s=4326,y=m.verticalWKID}return{heightModel:tt(s,y),heightUnit:X(y,s),horizontalUnit:Y(s)}}};t([e({json:{write:!0}})],v.prototype,"affineTransformations",void 0),t([e({json:{write:!0}})],v.prototype,"focalLength",void 0),t([e({json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),t([e({json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"horizontalWKID",void 0),t([e({json:{write:!0}})],v.prototype,"verticalWKID",void 0),t([e({json:{write:!0}})],v.prototype,"x",void 0),t([e({json:{write:!0}})],v.prototype,"y",void 0),t([e({json:{write:!0}})],v.prototype,"z",void 0),t([e({json:{write:!0}})],v.prototype,"type",void 0),v=t([x("esri.layers.orientedImagery.core.CameraOrientation")],v);const F=v;let f=class extends M(A(F)){constructor(){super(...arguments),this.type=1}get isAdvanced(){const{affineTransformations:i,focalLength:n,principalOffsetPoint:s,radialDistortionCoefficients:y,tangentialDistortionCoefficients:c}=this;return i?.length>1||!Number.isNaN(n)||s?.length>1||y?.length>1||c?.length>1}toString(){const{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,heading:g,pitch:h,roll:w,affineTransformations:P,focalLength:N,principalOffsetPoint:j,radialDistortionCoefficients:D,tangentialDistortionCoefficients:b}=this,p=[i,n,s,y,c,m,g,h,w];return this.isAdvanced&&(P?.forEach(r=>p.push(r)),p.push(N),j?.forEach(r=>p.push(r)),D?.forEach(r=>p.push(r)),b?.forEach(r=>p.push(r))),p.map(r=>Number.isNaN(r)?"":r).join("|")}};t([e({json:{write:!0}})],f.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"heading",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"horizontalWKID",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"verticalWKID",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"z",void 0),f=t([x("esri.layers.orientedImagery.core.CameraOrientationHPR")],f);const et=f;let u=class extends M(A(F)){constructor(){super(...arguments),this.type=2}get isAdvanced(){const{affineTransformations:i,focalLength:n,principalOffsetPoint:s,radialDistortionCoefficients:y,tangentialDistortionCoefficients:c}=this;return i?.length>1||!Number.isNaN(n)||s?.length>1||y?.length>1||c?.length>1}toString(){const{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,omega:g,phi:h,kappa:w,affineTransformations:P,focalLength:N,principalOffsetPoint:j,radialDistortionCoefficients:D,tangentialDistortionCoefficients:b}=this,p=[i,n,s,y,c,m,g,h,w];return this.isAdvanced&&(P?.forEach(r=>p.push(r)),p.push(N),j?.forEach(r=>p.push(r)),D?.forEach(r=>p.push(r)),b?.forEach(r=>p.push(r))),p.map(r=>isNaN(r)?"":r).join("|")}};t([e({json:{write:!0}})],u.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],u.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],u.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],u.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],u.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"omega",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"phi",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"kappa",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"horizontalWKID",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"verticalWKID",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"z",void 0),u=t([x("esri.layers.orientedImagery.core.CameraOrientationOPK")],u);const ot=u;let d=class extends M(A(F)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:i,focalLength:n,principalOffsetPoint:s,radialDistortionCoefficients:y,tangentialDistortionCoefficients:c}=this;return i?.length>1||!Number.isNaN(n)||s?.length>1||y?.length>1||c?.length>1}toString(){const{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,yaw:g,pitch:h,roll:w,affineTransformations:P,focalLength:N,principalOffsetPoint:j,radialDistortionCoefficients:D,tangentialDistortionCoefficients:b}=this,p=[i,n,s,y,c,m,g,h,w];return this.isAdvanced&&(P?.forEach(r=>p.push(r)),p.push(N),j?.forEach(r=>p.push(r)),j?.forEach(r=>p.push(r)),D?.forEach(r=>p.push(r)),b?.forEach(r=>p.push(r))),p.map(r=>Number.isNaN(r)?"":r).join("|")}};t([e({json:{write:!0}})],d.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],d.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],d.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],d.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],d.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"yaw",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"horizontalWKID",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"verticalWKID",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],d.prototype,"z",void 0),d=t([x("esri.layers.orientedImagery.core.CameraOrientationYPR")],d);const it=d;let O=class extends k{constructor(){super(...arguments),this.url=null}};t([e({type:Number,json:{write:!0}})],O.prototype,"lod",void 0),t([e({type:String,json:{write:!0}})],O.prototype,"rasterFunction",void 0),t([e({type:String,json:{write:!0}})],O.prototype,"url",void 0),O=t([x("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],O);let E=class extends k{};t([e({type:Number,json:{write:!0}})],E.prototype,"constantElevation",void 0),E=t([x("esri.layers.orientedImagery.cor.ElevationSourceDefinitions.ConstantElevation")],E);const rt=o=>"constantElevation"in o;var I;(function(o){o[o.HPR=1]="HPR",o[o.OPK=2]="OPK",o[o.YPR=3]="YPR",o[o.LTP=4]="LTP"})(I||(I={}));function nt(o,i,n){return i&&(o=`${i}${o}`),n&&(o+=`${n}`),o}function at(o,i,n){let{url:s}=o;return s?(s=nt(s,i,n),new O({...o,url:s})):null}function st(o,i,n){return o&&(rt(o)?new E(o):at(o,i,n))}const R=new V({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),H=new V({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),U=new Map;U.set(`${I.OPK}`,{desc:"Using Omega Phi Kappa",constructor:ot}),U.set(`${I.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:et}),U.set(`${I.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:it});const W=new Map;function pt(o){const[i,n,s,y,c,m,g,h,w,P,N,j,D,b,p,r,$,S,C,z,K,L,T]=o;return{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,omega:g,phi:h,kappa:w,affineTransformations:[P,N,j,D,b,p],focalLength:r,principalOffsetPoint:[$,S],radialDistortionCoefficients:[C,z,K],tangentialDistortionCoefficients:[L,T]}}function lt(o){const[i,n,s,y,c,m,g,h,w,P,N,j,D,b,p,r,$,S,C,z,K,L,T]=o;return{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,heading:g,pitch:h,roll:w,affineTransformations:[P,N,j,D,b,p],focalLength:r,principalOffsetPoint:[$,S],radialDistortionCoefficients:[C,z,K],tangentialDistortionCoefficients:[L,T]}}function yt(o){const[i,n,s,y,c,m,g,h,w,P,N,j,D,b,p,r,$,S,C,z,K,L,T]=o;return{type:i,horizontalWKID:n,verticalWKID:s,x:y,y:c,z:m,yaw:g,pitch:h,roll:w,affineTransformations:[P,N,j,D,b,p],focalLength:r,principalOffsetPoint:[$,S],radialDistortionCoefficients:[C,z,K],tangentialDistortionCoefficients:[L,T]}}function ct(o){const[i,n,s,y,c,m,...g]=o,h=W.get(m);return h?{type:i,latitude:n,longitude:s,ellipsoidRadius:y,squaredEccentricity:c,properties:h([m,"",...g])}:null}W.set(`${I.HPR}`,lt),W.set(`${I.YPR}`,yt),W.set(`${I.OPK}`,pt),W.set(`${I.LTP}`,ct);function l(o,i,n){return{name:`orientedImageryProperties.${o}`,write:!i||{target:`orientedImageryProperties.${o}`,writer:i},origins:{service:{name:`orientedImageryInfo.orientedImageryProperties.${o}`,write:i,read:n}}}}let a=class extends B{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.type="oriented-imagery",this.timeIntervalUnit=null,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null}get effectiveElevationSource(){const{elevationSource:o,demPathPrefix:i,demPathSuffix:n}=this;return st(o,i,n)}findFirstValidLayerId(o){return o.layers?.find(i=>i.type==="Oriented Imagery Layer")?.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Z("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([e({type:Number,json:l("cameraHeading")})],a.prototype,"cameraHeading",void 0),t([e({type:Number,json:l("cameraHeight")})],a.prototype,"cameraHeight",void 0),t([e({type:Number,json:l("cameraPitch")})],a.prototype,"cameraPitch",void 0),t([e({type:Number,json:l("cameraRoll")})],a.prototype,"cameraRoll",void 0),t([e({type:Number,json:l("coveragePercent")})],a.prototype,"coveragePercent",void 0),t([e({type:String,json:l("demPathPrefix")})],a.prototype,"demPathPrefix",void 0),t([e({type:String,json:l("demPathSuffix")})],a.prototype,"demPathSuffix",void 0),t([e({type:String,json:l("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0),t([e({type:String,json:l("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0),t([e({type:Object,json:l("elevationSource")})],a.prototype,"elevationSource",void 0),t([e()],a.prototype,"effectiveElevationSource",null),t([e({type:Number,json:l("farDistance")})],a.prototype,"farDistance",void 0),t([e({json:{write:!0}})],a.prototype,"geometryType",void 0),t([e({type:Number,json:l("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0),t([e({type:String,json:l("horizontalMeasurementUnit")})],a.prototype,"horizontalMeasurementUnit",void 0),t([e({type:String,json:l("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0),t([e({type:String,json:l("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0),t([e({type:Number,json:l("imageRotation")})],a.prototype,"imageRotation",void 0),t([e({type:Number,json:l("maximumDistance")})],a.prototype,"maximumDistance",void 0),t([e({type:Number,json:l("nearDistance")})],a.prototype,"nearDistance",void 0),t([e({type:["OrientedImageryLayer"]})],a.prototype,"operationalLayerType",void 0),t([e({json:l("orientationAccuracy",(o,i)=>{o&&(i.orientationAccuracy=o.join(","))})}),_(o=>o?o.trim().split(",").map(Number):null)],a.prototype,"orientationAccuracy",void 0),t([e({json:{...l("orientedImageryType",H.write,H.read),type:H.apiValues}})],a.prototype,"orientedImageryType",void 0),t([e({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),t([e({json:{...l("timeIntervalUnit",R.write,R.read),type:R.apiValues}})],a.prototype,"timeIntervalUnit",void 0),t([e({type:Number,json:l("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0),t([e({json:{...l("verticalMeasurementUnit"),type:new V({Feet:"feet",Meter:"meter"}).apiValues}})],a.prototype,"verticalMeasurementUnit",void 0),t([e({type:String,json:l("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0),t([e({type:String,json:l("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0),a=t([x("esri.layers.OrientedImageryLayer")],a);const Kt=a;export{Kt as default};
