import styles from  "../../styles/Home.module.css";

export default function Header() {
  return (
    <>
      
    <header class="header">
    <div class="top-bar d-flex">
        <div class="container-fluid px-lg-5 px-md-4 px-sm-3 px-2">
            <div class="row">
                <div class="col-12">
                    <div class="quick-help position-relative d-flex">
                        <small class="quick-contact">Toll Free No: <a class="text-decoration-none text-dark" href="tel:1800-425-31111">1800-425-31111</a></small>
                      
                        <a href="https://www.tamilnadutourism.tn.gov.in/search" class="btn btn-icon"><small class="pe-2"></small><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg></a>
                       
                        <div class="lang-dropdown">
                            <select name="" class="text-start form-control btn-icon border-0 bg-transparent btn" onchange="changeLang(this.value, 'https://www.tamilnadutourism.tn.gov.in')">
                                <option value="english" selected="selected">EN</option>
                                <option value="tamil">TA</option>
                            </select>
                        </div>
                       
                        <div class="position-relative social-share bg-transparent social_share_block text-center icon_common_block">
                            <div class="dropdown social-button">
                                <a class="btn border-0 dropdown-toggle share-btn bg-transparent p-0" href="#" role="button" id="socialdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                </a>

                                <ul class="dropdown-menu bg-white border-0 p-0" aria-labelledby="socialdropdown">
                                    <li class="facebook">
                                        <a title="Click here to share this page on Facebook" href="https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.tamilnadutourism.tn.gov.in%2Findex.php%2F" target="_blank"><svg fill="#000000" viewBox="0 0 24 24" width="18px" height="18px">
                                                <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"></path>
                                            </svg></a>
                                    </li>
                                    <li class="twitter">
                                        <a title="Click here to share this page on Twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.tamilnadutourism.tn.gov.in%2Findex.php%2F&amp;text=Welcome+to+Tamil+Nadu+%7C+Official+Website+of+Tamil+Nadu+Tourism+Department" target="_blank"><svg fill="#000000" viewBox="0 0 30 30" width="18px" height="18px">
                                                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                            </svg></a>
                                    </li>
                                    <li class="instagram">
                                        <a title="Click here to share this page on WhatsApp" href="whatsapp://send?text=https%3A%2F%2Fwww.tamilnadutourism.tn.gov.in%2Findex.php%2F" target="_blank">
                                            <svg fill="#000000" viewBox="0 0 24 24" width="20px" height="20px">
                                                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li class="instagram">
                                        <a title="Email this page" href="mailto:?subject=Welcome to Tamil Nadu | Official Website of Tamil Nadu Tourism Department&amp;body=I found an interesting page on Tamil Nadu Tourism website. Please check: https%3A%2F%2Fwww.tamilnadutourism.tn.gov.in%2F" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 31.5 24.75">
                                                <g id="mail-outline" transform="translate(-2.25 -5.625)">
                                                    <path id="Path_8" data-name="Path 8" d="M6.188,6.75H29.813a2.813,2.813,0,0,1,2.812,2.813V26.438a2.813,2.813,0,0,1-2.812,2.812H6.188a2.813,2.813,0,0,1-2.813-2.812V9.563A2.813,2.813,0,0,1,6.188,6.75Z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                                                    <path id="Path_9" data-name="Path 9" d="M7.875,11.25,18,19.125,28.125,11.25" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="btm-bar">
        <div class="container-fluid px-lg-5 px-md-4 px-sm-3 px-2">
            <nav class="navbar navbar-expand-lg">
                <h1 class="mb-0">
                    <a class="navbar-brand d-block p-0 m-0" href="https://www.tamilnadutourism.tn.gov.in">
                        <img src="https://www.tamilnadutourism.tn.gov.in/img/logo.webp" alt="Official logo of Tamil Nadu Tourism" class="w-100" />
                    </a>
                    <strong class="d-none">tamilnadu-tourism</strong>
                </h1>

                <div class="navbar-collapse stellarnav justify-content-end right desktop"><a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> </a>
                    <ul class="navbar-nav mb-2 mb-lg-0"><a href="#" class="close-menu full"><span class="icon-close"></span></a>
                        <li class="nav-item dropdown mega-menu position-static has-sub">
                            <a class="nav-link dropdown-toggle" href="https://www.tamilnadutourism.tn.gov.in/destinations">
                                Destinations                            </a>
                           
                            <ul class="dropdown-menu dropdown-mega-menu w-100 mt-0">

                                <div class="row">
                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-3 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-3 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/destinations/popular-tourist-places" class="text-dark font-secondary font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                    <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                                </svg>Popular Destinations</a></h4>
                                        <div class="list-group list-group-flush">
                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/ooty" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Ooty</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/kodaikanal" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Kodaikanal</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/kancheepuram" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Kancheepuram </a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/kanyakumari" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Kanniakumari</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/mahabalipuram" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Mahabalipuram </a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/madurai" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Madurai</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/chennai" class="list-group-item list-group-item-action font-12"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Chennai</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/thanjavur" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Thanjavur</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/velankanni" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Velankanni</a>
                                             


                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/rameswaram" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Rameswaram</a>
                                                
                                                <a href="https://www.tamilnadutourism.tn.gov.in/destinations/coimbatore" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Coimbatore</a>
                                        </div>
                                    </div>

                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-5 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-3 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/destinations/where-to-go" class="text-dark font-secondary font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                    <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                                </svg>Where to Go</a></h4>

                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div class="list-group list-group-flush">
                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/hills" class="list-group-item list-group-item-action">
                                                        <svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Hills</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/beaches" class="list-group-item list-group-item-action">
                                                    <svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Beaches</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/wildlife" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Wildlife</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/waterfalls" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Waterfalls</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/museums" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553"><path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path></svg>Museums</a>
                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/forts" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Forts</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/palaces" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Palaces</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/monuments" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Monuments</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/lakes" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Lakes</a>
                                                </div>
                                            </div>

                                            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="list-group list-group-flush">

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/districts" class="list-group-item list-group-item-action">
                                                        <svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Districts</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/pilgrim-centres" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path></svg>Pilgrim Centres</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/cities" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Cities</a>

                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/places-of-interest" class="list-group-item list-group-item-action"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                            <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                        </svg>Places of Interest</a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-lg-0 p-5">
                                        <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary">
                                            <a href="https://www.tamilnadutourism.tn.gov.in/destinations/world-heritage-sites" class="text-dark font-secondary font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                    <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                                </svg>World Heritage Sites</a>
                                        </h4>
                                                                                        <div class="card img-wrap img-wrap-sm mb-3">
                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/gangaikonda-cholapuram" class="p-0 border-0"><img src="https://www.tamilnadutourism.tn.gov.in/img/pages/thumb/gangaikonda-cholapuram-1653462626_d1ad072dfb78c46813de.webp" loading="lazy" alt="" class="w-100" /></a>
                                                </div>
                                                <div class="desc">
                                                <h4 class="line-1 mb-lg-2 mb-md-2 mb-sm-2 mb-1 font-20 font-regular font-primary"><a href="https://www.tamilnadutourism.tn.gov.in/destinations/gangaikonda-cholapuram" class="text-dark font-primary p-0">Gangaikonda Cholapuram</a></h4>
                                                    <p class="line-2">A temple that is much more than a place of worship; a living tribute to the rich history of India and the legacy of the marvellous Dravidian architectural genre. The Gangaikonda Cholapuram Temple is a repository of the ageless sculptures of the Chola period in South India. 
                                                    </p>
                                                                                                
                                                    <a href="https://www.tamilnadutourism.tn.gov.in/destinations/gangaikonda-cholapuram" class="drop-more ps-0 pt-0 pb-0 position-relative d-inline-block icon-black-wrap font-14">Read More</a>
                                                
                                            </div>
                                                                            </div>

                                </div>


                            </ul>
                        <a class="dd-toggle" href="#"><span class="icon-plus"></span></a></li>

                        <li class="nav-item dropdown mega-menu position-static has-sub">
                            <a class="nav-link dropdown-toggle" href="https://www.tamilnadutourism.tn.gov.in/experiences">Experiences</a>
                            
                            <ul class="dropdown-menu dropdown-mega-menu w-100 mt-0">

                                <div class="row">
                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">

                                        <div class="list-group list-group-flush">
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/adventure" class="text-dark font-secondary font-bold p-0"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                        <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                    </svg>Adventure</a></h4>

                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/eat-drink" class="text-dark font-secondary font-bold p-0"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                        <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                    </svg>Eat &amp; Drink</a></h4>

                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/events" class="text-dark font-secondary font-bold p-0"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                        <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                    </svg>Festivals &amp; Events</a></h4>

                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/crafts" class="text-dark font-secondary font-bold p-0"><svg width="12px" height="8px" viewBox="0 0 2.455 4.553">
                                                        <path d="M193.339,44.8l-.031.015a.173.173,0,0,0-.067.273.31.31,0,0,0,.041.041l1.909,1.909c.01.01.031.021.041.031v.021a.285.285,0,0,0-.041.031q-.957.957-1.919,1.914a.19.19,0,0,0-.067.17.174.174,0,0,0,.278.113.157.157,0,0,0,.041-.041l2.053-2.053a.178.178,0,0,0,0-.293l-2.053-2.053a.624.624,0,0,0-.113-.077Z" transform="translate(-193.2 -44.8)" fill="#f7c91b"></path>
                                                    </svg>Crafts</a></h4>

                                         </div>
                                    </div>

                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <div class="list-group list-group-flush">
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/spiritual" class="text-dark font-secondary font-bold p-0"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Spiritual</a></h4>
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/heritage" class="text-dark font-secondary font-bold p-0"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Heritage</a></h4>
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/ecotourism" class="text-dark font-secondary font-bold p-0"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Ecotourism</a></h4>
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/shopping" class="text-dark font-secondary font-bold p-0"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Shopping</a></h4>
                                            <h4 class="mb-lg-4 mb-md-4 mb-sm-3 mb-2 font-16 font-regular font-secondary"><a href="https://www.tamilnadutourism.tn.gov.in/experiences/medical-value-travel" class="text-dark font-secondary font-bold p-0"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Medical Tourism</a></h4>
                                        </div>
                                    </div>
                                                                            <div class="col-lg-4 col-md-4 col-sm-4 col-12 mb-3 mb-lg-0  p-lg-5 p-md-4 p-sm-4 p-4 d-lg-block d-md-block d-sm-none d-none">
                                            <div class="card img-wrap img-wrap-sm mb-3">
                                                <a href="https://www.tamilnadutourism.tn.gov.in/food/biriyanis-of-tamil-nadu" class="p-0 border-0"><img src="https://www.tamilnadutourism.tn.gov.in/img/pages/thumb/biriyani-1655269484_491a1e9811e1e9d2e05a.webp" alt="" class="w-100" loading="lazy"/></a>
                                            </div>
                                            <div class="desc">
                                                <h4 class="line-1 mb-lg-2 mb-md-2 mb-sm-2 mb-1 font-20 font-regular font-primary"><a href="https://www.tamilnadutourism.tn.gov.in/food/biriyanis-of-tamil-nadu" class="text-dark font-primary p-0">Biriyani</a></h4>
                                                <p class="line-2">
                                                    A potpourri of vibrant cultures, exotic destinations and once-in-                                                </p>
                                                <a href="https://www.tamilnadutourism.tn.gov.in/food/biriyanis-of-tamil-nadu" class="drop-more ps-0 pt-0 pb-0 position-relative d-inline-block icon-black-wrap font-14">Read More</a>
                                            </div>
                                        </div>

                                    
                                </div>


                            </ul>
                        <a class="dd-toggle" href="#"><span class="icon-plus"></span></a></li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://www.tamilnadutourism.tn.gov.in/virtualtour">Virtual Tour</a>
                        </li>

                        <li class="nav-item dropdown mega-menu position-static has-sub">
                            <a class="nav-link dropdown-toggle" href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip">Plan Your Trip</a>
                          
                            <ul class="dropdown-menu dropdown-mega-menu w-100 mt-0" style="display: none;">

                                <div class="row">
                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-3 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-lg-3 mb-md-3 mb-sm-3 mb-2 font-16 font-secondary text-dark  font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                            </svg>About Tamil Nadu</h4>
                                        <div class="list-group list-group-flush">
                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/tamil-nadu-at-a-glance" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Tamil Nadu at a Glance</a>

                                            

                                            <a href="https://www.tamilnadutourism.tn.gov.in/maps" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Maps</a>

                                            

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/airports" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Airports</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/railways" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Railways</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/public-transport" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Public Transport</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/taxi" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Taxi</a>

                                            

                                        </div>
                                    </div>

                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-3 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-lg-3 mb-md-3 mb-sm-3 mb-2 font-16 font-secondary text-dark  font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                            </svg>Essentials</h4>
                                        <div class="list-group list-group-flush">
                                            

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/how-to-reach" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>How to Reach</a>

                                            

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/visa" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Visa</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/travel-tips" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Travel Tips</a>

                                            <a target="_blank" href="https://www.tamilnadutourism.tn.gov.in/img/Tourist-Guides-2022.pdf" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Tourist Guide</a>

                                            <a href="https://www.tamilnadutourism.tn.gov.in/plan-your-trip/useful-vocabulary" class="list-group-item list-group-item-action"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Useful Vocabulary</a>

                                            
                                        </div>
                                    </div>
                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-3 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-lg-3 mb-md-3 mb-sm-3 mb-2 font-16  font-secondary text-dark  font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                            </svg>Accommodation</h4>
                                        <div class="list-group list-group-flush mb-4">
                                            <a href="https://www.ttdconline.com/hotel_list.html" class="list-group-item list-group-item-action" target="_blank" rel="nofollow"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Book a TTDC Hotel</a>

                                        </div>
                                        <h4 class="mb-lg-3 mb-md-3 mb-sm-3 mb-2 font-16 font-secondary text-dark font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                            </svg>Deals &amp; Offers</h4>
                                        <div class="list-group list-group-flush">
                                            

                                            <a href="https://www.ttdconline.com/package_list.html" class="list-group-item list-group-item-action" target="_blank" rel="nofollow"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Tour Packages</a>
                                        </div>
                                    </div>
                                    <div class="py-lg-5 py-md-3 py-sm-3 py-2 col-lg-3 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0 px-lg-5 px-md-4 px-sm-3 px-3">
                                        <h4 class="mb-lg-3 mb-md-3 mb-sm-3 mb-2 font-16 font-secondary text-dark font-bold p-0"><svg width="4px" height="12px" viewBox="0 0 1.06 4.239">
                                                <path d="M15.53,7.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,7.59Zm0-1.59a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,6Zm0,3.179a.53.53,0,1,0,.53.53A.531.531,0,0,0,15.53,9.179Z" transform="translate(-15 -6)" fill="#f7c91b"></path>
                                            </svg>Publications</h4>
                                        <div class="list-group list-group-flush mb-3">
                                            
                                                <a href="https://www.tamilnadutourism.tn.gov.in/ebrochures" class="list-group-item list-group-item-action body-overlay-hidden"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Ebrochures</a>

                                            <a href="#newsletter" class="list-group-item list-group-item-action body-overlay-hidden"><svg width="10px" height="2px" viewBox="0 0 5.318 0.5">
                                                    <line x2="5.318" transform="translate(0 0.25)" fill="none" stroke="#f7c91b" stroke-width="0.5"></line>
                                                </svg>Newsletter</a>

                                            

                                            
                                        </div>
                                        


                                    </div>
                                </div>
                            </ul>
                        <a class="dd-toggle" href="#"><span class="icon-plus"></span></a></li>

                        <li class="nav-item has-sub">
                            <a class="nav-link" href="#">Gallery</a>
                            <ul class="rounded-0 dropdown-menu dropdown-sm-menu p-0 border-0">
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/photos">Photos</a></li>
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/videos">Videos</a></li>
                            </ul>
                        <a class="dd-toggle" href="#"><span class="icon-plus"></span></a></li>

                        <li class="nav-item">
                            <a class="nav-link" href="https://www.tntourismtors.com" target="_blank">Register as an Operator</a>
                        </li>

                        <li class="nav-item more-dropdown-item has-sub">
                            <a href="#" class="nav-link">More</a>
                            <ul class="rounded-0 dropdown-menu dropdown-sm-menu p-0 border-0 more-dropdown">
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/about"> About Us</a></li>
                              
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/blogs">Blogs</a></li>
                                <li><a href="https://tntourismawards.com/" target="_blank">Tourism Awards</a></li>
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/contact">Contact</a></li>
                                <li><a href="https://trainingprovider.tnskill.tn.gov.in/TNSDCTPSearch" target="_blank" rel="nofollow">Certification Programme</a></li>
                                <li><a href="https://www.tamilnadutourism.tn.gov.in/tenders"> Tenders</a></li>
                            </ul>
                        <a class="dd-toggle" href="#"><span class="icon-plus"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>
    </>
  );
}
