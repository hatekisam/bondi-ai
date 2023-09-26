import clsx from 'clsx'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar: React.FC = () => {
        const path = useLocation()
        console.log(path)
        return (
                <div className='w-[22vw] h-screen border border-[#F2F2F5] bg-white flex flex-col justify-between'>
                        <div>
                                <div className="flex flex-col gap-3 items-center py-10">
                                        <img src="/svg/logo.svg" alt="" className='w-[30%]' />
                                        <p className="text-[#108A00] text-[24px] font-bold font-lato">Bondi Ai</p>
                                </div>
                                <div className="w-full h-[2px] bg-[#F2F2F5]"></div>
                                <div className="flex flex-col gap-2 py-3 ">
                                        <Link to={"/"}>
                                                <div className={clsx("flex gap-2 items-center px-4 py-2", path.pathname === "/" ? "text-[#108A00]" : "text-[#737581]")}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={clsx(path.pathname != "/" ? "fill-[#737581]" : "fill-[#108A00]")}>
                                                                <path d="M3.75 6C3.75 5.40326 3.98705 4.83097 4.40901 4.40901C4.83097 3.98705 5.40326 3.75 6 3.75H8.25C8.84674 3.75 9.41903 3.98705 9.84099 4.40901C10.2629 4.83097 10.5 5.40326 10.5 6V8.25C10.5 8.84674 10.2629 9.41903 9.84099 9.84099C9.41903 10.2629 8.84674 10.5 8.25 10.5H6C5.40326 10.5 4.83097 10.2629 4.40901 9.84099C3.98705 9.41903 3.75 8.84674 3.75 8.25V6ZM3.75 15.75C3.75 15.1533 3.98705 14.581 4.40901 14.159C4.83097 13.7371 5.40326 13.5 6 13.5H8.25C8.84674 13.5 9.41903 13.7371 9.84099 14.159C10.2629 14.581 10.5 15.1533 10.5 15.75V18C10.5 18.5967 10.2629 19.169 9.84099 19.591C9.41903 20.0129 8.84674 20.25 8.25 20.25H6C5.40326 20.25 4.83097 20.0129 4.40901 19.591C3.98705 19.169 3.75 18.5967 3.75 18V15.75ZM13.5 6C13.5 5.40326 13.7371 4.83097 14.159 4.40901C14.581 3.98705 15.1533 3.75 15.75 3.75H18C18.5967 3.75 19.169 3.98705 19.591 4.40901C20.0129 4.83097 20.25 5.40326 20.25 6V8.25C20.25 8.84674 20.0129 9.41903 19.591 9.84099C19.169 10.2629 18.5967 10.5 18 10.5H15.75C15.1533 10.5 14.581 10.2629 14.159 9.84099C13.7371 9.41903 13.5 8.84674 13.5 8.25V6ZM13.5 15.75C13.5 15.1533 13.7371 14.581 14.159 14.159C14.581 13.7371 15.1533 13.5 15.75 13.5H18C18.5967 13.5 19.169 13.7371 19.591 14.159C20.0129 14.581 20.25 15.1533 20.25 15.75V18C20.25 18.5967 20.0129 19.169 19.591 19.591C19.169 20.0129 18.5967 20.25 18 20.25H15.75C15.1533 20.25 14.581 20.0129 14.159 19.591C13.7371 19.169 13.5 18.5967 13.5 18V15.75Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className='text-sm font-bold font-pop'>Dashboard</p>
                                                </div>
                                        </Link>
                                        <Link to={"/creation"}>
                                                <div className={clsx("flex gap-2 items-center px-4 py-2", path.pathname === "/creation" ? "text-[#108A00]" : "text-[#737581]")}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={clsx(path.pathname != "/creation" ? "fill-[#737581]" : "fill-[#108A00]")}>
                                                                <path d="M12 6V4M12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10M12 6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10M12 10V20M6 18C6.53043 18 7.03914 17.7893 7.41421 17.4142C7.78929 17.0391 8 16.5304 8 16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14M6 18C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14M6 18V20M6 14V4M18 18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14M18 18C17.4696 18 16.9609 17.7893 16.5858 17.4142C16.2107 17.0391 16 16.5304 16 16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14M18 18V20M18 14V4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <p className='text-sm font-bold font-pop'>Creation</p>
                                                </div>
                                        </Link>
                                        <Link to={"/database"}>
                                                <div className={clsx("flex gap-2 items-center px-4 py-2", path.pathname === "/database" ? "text-[#108A00]" : "text-[#737581]")}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={clsx(path.pathname != "/database" ? "fill-[#737581]" : "fill-[#108A00]")}>
                                                                <path d="M16.3159 2.78509C15.9369 1.38109 13.1161 0 8.18182 0C3.24753 0 0.426436 1.38109 0.0477818 2.78509C0.0202909 2.8332 0 2.88589 0 2.94545V3.10909V6.87273V7.03636V7.2V10.8V10.9636V11.1273V15.0545C0 15.1076 0.0140728 15.1576 0.0382909 15.2021C0.4248 16.8041 3.88276 18 8.18182 18C12.4711 18 15.9235 16.8091 16.3227 15.2129C16.3489 15.1661 16.3636 15.1121 16.3636 15.0545V11.1273V10.9636V10.8V7.2V7.03636V6.87273V3.10909V2.94545C16.3636 2.88589 16.3433 2.8332 16.3159 2.78509ZM15.6832 11.1224C15.6741 11.162 15.6613 11.2012 15.6453 11.2412C15.6322 11.2736 15.6161 11.306 15.5985 11.3384C15.5765 11.3786 15.552 11.4189 15.5229 11.4591C15.5013 11.4896 15.4767 11.5197 15.4512 11.5498C15.4149 11.5927 15.3763 11.6355 15.3324 11.6781C15.3059 11.7039 15.2768 11.7295 15.2473 11.7553C15.1936 11.8021 15.1377 11.8486 15.0752 11.8947C15.0483 11.9147 15.0195 11.934 14.9911 11.9536C14.9171 12.0047 14.8399 12.0554 14.7551 12.1052C14.7328 12.1186 14.7089 12.1313 14.6857 12.1444C14.5882 12.1994 14.4864 12.2541 14.3764 12.3071C14.3624 12.314 14.3476 12.3205 14.3332 12.3271C14.2105 12.385 14.0822 12.4419 13.9451 12.4969C13.9412 12.4985 13.9372 12.4999 13.9333 12.5015C13.1901 12.7983 12.2393 13.048 11.1315 13.2117C11.126 13.2123 11.1204 13.213 11.1148 13.214C10.8995 13.2457 10.6786 13.2739 10.4518 13.2987C10.4148 13.3027 10.3759 13.3053 10.3385 13.3092C10.1405 13.3298 9.94025 13.3488 9.73407 13.3639C9.63982 13.3707 9.54098 13.374 9.44509 13.3799C9.28996 13.3891 9.13647 13.3992 8.97742 13.4048C8.71756 13.4129 8.45247 13.4182 8.18182 13.4182C7.91116 13.4182 7.64607 13.4129 7.38589 13.4038C7.22684 13.3982 7.07335 13.3877 6.91822 13.3789C6.82233 13.3733 6.72349 13.3697 6.62924 13.3629C6.42305 13.3478 6.22276 13.3288 6.02476 13.3082C5.98745 13.3043 5.94851 13.3017 5.91153 13.2977C5.68473 13.2729 5.46382 13.2444 5.24847 13.213C5.24291 13.2123 5.23735 13.2117 5.23178 13.2107C4.12396 13.0471 3.17324 12.7973 2.43 12.5005C2.42607 12.4992 2.42215 12.4976 2.41822 12.4959C2.28109 12.4409 2.15247 12.384 2.03007 12.3261C2.016 12.3192 2.00095 12.3127 1.98687 12.3061C1.87691 12.2531 1.77513 12.1988 1.6776 12.1435C1.65469 12.1304 1.63047 12.1176 1.60822 12.1042C1.52345 12.0544 1.44622 12.0037 1.37225 11.9527C1.34411 11.933 1.31498 11.9137 1.28815 11.8937C1.22564 11.8476 1.16967 11.8011 1.116 11.7543C1.08687 11.7288 1.05742 11.7033 1.03091 11.6771C0.987055 11.6345 0.948436 11.592 0.912109 11.5488C0.886582 11.5187 0.862036 11.4886 0.840436 11.4581C0.811636 11.4179 0.787091 11.3776 0.764836 11.3374C0.747164 11.305 0.731454 11.2726 0.718036 11.2402C0.702 11.2006 0.689236 11.161 0.680073 11.1214C0.667964 11.0693 0.654545 11.0163 0.654545 10.9636C0.654545 10.9267 0.6588 10.8897 0.664691 10.853C0.672873 10.8036 0.668291 10.7542 0.654545 10.7074V8.27771C0.663709 8.28622 0.675164 8.2944 0.684655 8.30291C0.756 8.36575 0.828655 8.42825 0.910473 8.48847C2.14331 9.42087 4.60865 10.1455 8.18182 10.1455C11.7399 10.1455 14.1991 9.42676 15.4371 8.49993C15.536 8.42793 15.625 8.35364 15.7088 8.27804L15.7091 8.27771V10.7074C15.6953 10.7542 15.6908 10.8036 15.6989 10.853C15.7052 10.8897 15.7091 10.9267 15.7091 10.9636C15.7091 11.0163 15.6957 11.0693 15.6832 11.1224ZM15.7091 4.35044V6.78011C15.6953 6.82691 15.6908 6.87633 15.6989 6.92575C15.7052 6.9624 15.7091 6.99938 15.7091 7.03636C15.7091 7.08905 15.6957 7.14207 15.6832 7.19509C15.6741 7.23469 15.6613 7.27396 15.6453 7.31389C15.6322 7.34629 15.6161 7.37869 15.5985 7.41109C15.5765 7.45135 15.552 7.4916 15.5229 7.53185C15.5013 7.56229 15.4767 7.5924 15.4512 7.62251C15.4149 7.66538 15.3763 7.70825 15.3324 7.7508C15.3059 7.77665 15.2768 7.80218 15.2473 7.82804C15.1936 7.87484 15.1377 7.92131 15.0752 7.96745C15.0483 7.98742 15.0195 8.00673 14.9911 8.02636C14.9171 8.07742 14.8399 8.12815 14.7551 8.17789C14.7328 8.19131 14.7089 8.20407 14.6857 8.21716C14.5882 8.27215 14.4864 8.3268 14.3764 8.37982C14.3624 8.38669 14.3476 8.39324 14.3332 8.39978C14.2105 8.45771 14.0822 8.51465 13.9451 8.56964C13.9412 8.57127 13.9372 8.57258 13.9333 8.57422C13.1901 8.87105 12.2393 9.12076 11.1315 9.2844C11.126 9.28505 11.1204 9.28571 11.1148 9.28669C10.8995 9.31844 10.6786 9.34658 10.4518 9.37145C10.4148 9.37538 10.3759 9.378 10.3385 9.38193C10.1405 9.40254 9.94025 9.42153 9.73407 9.43658C9.63982 9.44345 9.54098 9.44673 9.44509 9.45262C9.28996 9.46178 9.13647 9.47193 8.97742 9.47749C8.71756 9.48567 8.45247 9.49091 8.18182 9.49091C7.91116 9.49091 7.64607 9.48567 7.38589 9.47651C7.22684 9.47094 7.07335 9.46047 6.91822 9.45164C6.82233 9.44607 6.72349 9.44247 6.62924 9.4356C6.42305 9.42054 6.22276 9.40156 6.02476 9.38095C5.98745 9.37702 5.94851 9.3744 5.91153 9.37047C5.68473 9.3456 5.46382 9.31713 5.24847 9.28571C5.24291 9.28505 5.23735 9.2844 5.23178 9.28342C4.12396 9.11978 3.17324 8.87007 2.43 8.57324C2.42607 8.57193 2.42215 8.57029 2.41822 8.56865C2.28109 8.51367 2.15247 8.45673 2.03007 8.3988C2.016 8.39193 2.00095 8.38538 1.98687 8.37884C1.87691 8.32582 1.77513 8.27149 1.6776 8.21618C1.65469 8.20309 1.63047 8.19033 1.60822 8.17691C1.52345 8.12716 1.44622 8.07644 1.37225 8.02538C1.34411 8.00574 1.31498 7.98644 1.28815 7.96647C1.22564 7.92033 1.16967 7.87385 1.116 7.82705C1.08687 7.80153 1.05742 7.776 1.03091 7.74982C0.987055 7.70727 0.948436 7.66473 0.912109 7.62153C0.886582 7.59142 0.862036 7.56131 0.840436 7.53087C0.811636 7.49062 0.787091 7.45036 0.764836 7.41011C0.747164 7.37771 0.731454 7.34531 0.718036 7.31291C0.702 7.27331 0.689236 7.23371 0.680073 7.19411C0.667964 7.14207 0.654545 7.08905 0.654545 7.03636C0.654545 6.99938 0.6588 6.9624 0.664691 6.92575C0.672873 6.87633 0.668291 6.82691 0.654545 6.78011V4.35044C0.693818 4.38611 0.738655 4.42113 0.7812 4.45647C0.804764 4.47611 0.826691 4.49575 0.851564 4.51538C0.949745 4.59262 1.05578 4.66887 1.17065 4.74316C1.19455 4.75855 1.22138 4.7736 1.24625 4.78898C1.34247 4.84887 1.44425 4.90745 1.55127 4.96505C1.59087 4.98633 1.63047 5.00727 1.67138 5.02822C1.79084 5.08909 1.91618 5.14833 2.04807 5.2056C2.06967 5.21509 2.08931 5.22491 2.11124 5.23407C2.26473 5.2992 2.42771 5.36138 2.59724 5.4216C2.64404 5.43829 2.69313 5.454 2.74124 5.47036C2.87607 5.51585 3.01549 5.55938 3.15982 5.6016C3.21185 5.61665 3.26291 5.63236 3.31625 5.64676C3.50771 5.69978 3.70538 5.75018 3.91287 5.79665C3.94135 5.8032 3.97211 5.80844 4.00091 5.81465C4.18385 5.85458 4.37367 5.89156 4.56873 5.92625C4.63484 5.93804 4.70193 5.94916 4.76935 5.96029C4.95491 5.99073 5.14604 6.01855 5.34207 6.04407C5.39247 6.05062 5.44058 6.05815 5.49164 6.06436C5.73513 6.09382 5.98713 6.11902 6.246 6.14062C6.30982 6.14585 6.37625 6.14978 6.44105 6.15436C6.64822 6.16942 6.85996 6.18185 7.07662 6.19167C7.15549 6.19527 7.23404 6.19887 7.31455 6.20182C7.59665 6.21131 7.884 6.21818 8.18182 6.21818C8.47964 6.21818 8.76698 6.21131 9.04909 6.20182C9.12927 6.19887 9.20782 6.19527 9.28702 6.19167C9.50367 6.18185 9.71542 6.16942 9.92258 6.15436C9.98738 6.14945 10.0535 6.14585 10.1176 6.14062C10.3765 6.11935 10.6285 6.09382 10.872 6.06436C10.9231 6.05815 10.9712 6.05062 11.0216 6.04407C11.2176 6.01855 11.4084 5.99073 11.5943 5.96029C11.6617 5.94916 11.7288 5.93804 11.7949 5.92625C11.99 5.89156 12.1798 5.85458 12.3627 5.81465C12.3915 5.80844 12.4223 5.80287 12.4508 5.79665C12.6583 5.75018 12.8559 5.69945 13.0474 5.64676C13.1007 5.63204 13.1518 5.61665 13.2038 5.6016C13.3481 5.55938 13.4876 5.51585 13.6224 5.47036C13.6705 5.454 13.7196 5.43829 13.7664 5.4216C13.9359 5.36138 14.0992 5.2992 14.2524 5.23407C14.2743 5.22491 14.294 5.21509 14.3156 5.2056C14.4475 5.148 14.5728 5.08909 14.6923 5.02822C14.7332 5.00727 14.7731 4.98633 14.8124 4.96505C14.9194 4.90778 15.0212 4.8492 15.1174 4.78898C15.1423 4.7736 15.1691 4.75855 15.193 4.74316C15.3079 4.66887 15.4139 4.59295 15.5121 4.51538C15.5366 4.49575 15.5585 4.47611 15.5824 4.45647C15.625 4.42113 15.6698 4.38611 15.7091 4.35044ZM8.18182 0.654545C12.618 0.654545 15.7091 1.94793 15.7091 3.10909C15.7091 4.27025 12.618 5.56364 8.18182 5.56364C3.74564 5.56364 0.654545 4.27025 0.654545 3.10909C0.654545 1.94793 3.74564 0.654545 8.18182 0.654545ZM15.7091 14.9573C15.7045 14.9717 15.7012 14.9865 15.6986 15.0015C15.5131 16.1336 12.4481 17.3455 8.18182 17.3455C3.91549 17.3455 0.850582 16.1336 0.665018 15.0015C0.6624 14.9868 0.6588 14.9724 0.654545 14.9587V12.205C0.663709 12.2135 0.675164 12.2217 0.684655 12.2302C0.756 12.293 0.828655 12.3555 0.910473 12.4157C2.14331 13.3481 4.60865 14.0727 8.18182 14.0727C11.7399 14.0727 14.1991 13.354 15.4371 12.4272C15.536 12.3552 15.625 12.2809 15.7088 12.2053L15.7091 12.205V14.9573Z" />
                                                        </svg>
                                                        <p className='text-sm font-bold font-pop'>Database</p>
                                                </div>
                                        </Link>
                                </div>
                        </div>
                        <div>
                                <div className="w-full h-[2px] bg-[#F2F2F5]"></div>
                                <Link to={"/settings"} >
                                        <div className={clsx("flex gap-2 items-center px-4 py-2 my-3", path.pathname === "/settings" ? "text-[#108A00]" : "text-[#737581]")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={clsx(path.pathname != "/settings" ? "fill-[#737581]" : "fill-[#108A00]")}>
                                                        <path d="M10.343 3.94C10.433 3.398 10.903 3 11.453 3H12.546C13.096 3 13.566 3.398 13.656 3.94L13.805 4.834C13.875 5.258 14.189 5.598 14.585 5.764C14.983 5.928 15.44 5.906 15.79 5.656L16.527 5.129C16.7438 4.97405 17.0085 4.90107 17.274 4.92305C17.5395 4.94502 17.7887 5.06053 17.977 5.249L18.75 6.023C19.14 6.412 19.19 7.025 18.87 7.473L18.343 8.21C18.093 8.56 18.071 9.016 18.236 9.414C18.401 9.811 18.741 10.124 19.166 10.194L20.059 10.344C20.602 10.434 20.999 10.904 20.999 11.453V12.547C20.999 13.097 20.602 13.567 20.059 13.657L19.166 13.806C18.741 13.876 18.401 14.189 18.236 14.586C18.071 14.984 18.093 15.44 18.343 15.79L18.87 16.528C19.19 16.975 19.139 17.588 18.75 17.978L17.976 18.751C17.7877 18.9392 17.5388 19.0546 17.2735 19.0765C17.0082 19.0985 16.7437 19.0257 16.527 18.871L15.789 18.344C15.439 18.094 14.983 18.072 14.586 18.237C14.189 18.402 13.876 18.742 13.805 19.166L13.656 20.06C13.566 20.602 13.096 21 12.546 21H11.452C10.902 21 10.433 20.602 10.342 20.06L10.194 19.166C10.123 18.742 9.80999 18.402 9.41299 18.236C9.01499 18.072 8.55899 18.094 8.20899 18.344L7.47099 18.871C7.02399 19.191 6.41099 19.14 6.02099 18.751L5.24799 17.977C5.05952 17.7887 4.94401 17.5395 4.92204 17.274C4.90006 17.0085 4.97305 16.7438 5.12799 16.527L5.65499 15.79C5.90499 15.44 5.92799 14.984 5.76299 14.586C5.59799 14.189 5.25799 13.876 4.83299 13.806L3.93899 13.656C3.39699 13.566 2.99899 13.096 2.99899 12.547V11.453C2.99899 10.903 3.39699 10.433 3.93899 10.343L4.83299 10.194C5.25699 10.124 5.59799 9.811 5.76299 9.414C5.92799 9.016 5.90599 8.56 5.65599 8.21L5.12899 7.472C4.97405 7.25524 4.90106 6.99053 4.92304 6.72499C4.94501 6.45945 5.06052 6.21034 5.24899 6.022L6.02199 5.249C6.21033 5.06053 6.45945 4.94502 6.72498 4.92305C6.99052 4.90107 7.25524 4.97405 7.47199 5.129L8.20899 5.656C8.55899 5.906 9.01599 5.928 9.41299 5.763C9.80999 5.598 10.123 5.258 10.193 4.834L10.343 3.94Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className='text-sm font-bold font-pop'>Settings</p>
                                        </div>
                                </Link>
                        </div>
                </div>
        )
}

export default Sidebar