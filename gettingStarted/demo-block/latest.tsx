import React, { useState, useEffect } from 'react';
import './demo-block.css';

export default function Latest() {
    const [currentVersion, setCurrentVersion] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const secPath = location.pathname.includes('zh-CN/docs') ? location.pathname.split('/')[3] : location.pathname.split('/')[2]
            if (location.pathname.includes('docs') && ['dev', '2.1', '2.0', '1.2'].includes(secPath)) {
                setCurrentVersion(secPath)
            } else {
                setCurrentVersion('')
            }
        }
    }, [typeof window !== 'undefined' && location.pathname]);
    return (
        <>
            <div className="home-page-hero">
                {/* <div style={{ fontSize: '2rem', fontWeight: 500, width: 600, marginTop: '1.5rem', color: '#1d1d1d' }}>热门内容</div> */}
                {/* <div className="home-page-hero-left">
                    <div className="home-page-hero-left-icon">
                    <svg width="159" height="30" viewBox="0 0 159 30" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="m13.605 4.594-3.273-3.273A4.496 4.496 0 0 0 7.153 0a4.183 4.183 0 0 0-2.92 1.176 4.285 4.285 0 0 0-.06 6.107l5.94 5.94a.678.678 0 0 0 .933 0l2.556-2.557c.16-.192 2.834-3.245.003-6.072Z" fill="#15A9CA"></path><path d="M18.97 9.823c-.624-.604-1.27-1.227-1.855-1.901v-.024c-.02.062-.037.125-.047.189a6.727 6.727 0 0 1-2.003 3.747c-3.446 3.422-6.93 6.919-10.302 10.302l-.455.45a4.367 4.367 0 0 0-1.336 2.416 4.673 4.673 0 0 0 1.2 3.669 3.921 3.921 0 0 0 3.084 1.325c1.345.02 2-.157 2.98-1.11 3.92-3.837 7.84-7.706 10.807-10.646 1.4-1.392 1.72-3.697.729-5.25a18.006 18.006 0 0 0-2.803-3.167Z" fill="#52CAA3"></path><path d="M-.004 7.774v14.457a.803.803 0 0 0 1.372.569l7.276-7.276a.74.74 0 0 0 0-1.042L1.368 7.206a.784.784 0 0 0-.56-.235.811.811 0 0 0-.812.803Z" fill="#5268AD"></path><path d="M31.748 21.14V8.876h3.638c3.986 0 6.468 2.352 6.468 6.127s-2.481 6.139-6.468 6.139h-3.638Zm1.96-1.755h1.76c2.693 0 4.43-1.717 4.43-4.371 0-2.654-1.737-4.371-4.43-4.371h-1.76v8.742ZM50.612 21.33a6.326 6.326 0 1 1 0-12.652 6.326 6.326 0 0 1 0 12.652Zm0-10.835a4.512 4.512 0 0 0 0 9.016 4.555 4.555 0 0 0 4.45-4.532 4.473 4.473 0 0 0-4.45-4.484ZM75.056 8.875H73.04v12.254h2.015V8.875ZM82.474 21.33a9.55 9.55 0 0 1-3.76-.804v-1.803a9.204 9.204 0 0 0 3.76.87c1.568 0 2.615-.717 2.615-1.78 0-1.195-1.278-1.67-2.63-2.171-2.121-.784-3.744-1.54-3.744-3.548 0-2.52 2.281-3.418 4.237-3.418 1.1 0 2.19.205 3.215.603v1.764a9.159 9.159 0 0 0-3.266-.65c-1.505 0-2.18.784-2.18 1.568 0 1.039 1.13 1.454 2.455 1.932 2.313.835 4.077 1.65 4.077 3.842-.008 2.125-1.968 3.595-4.779 3.595ZM66.026 16.174l.764-.33a3.634 3.634 0 0 0 2.2-3.327c0-2.211-1.592-3.638-4.054-3.638h-4.645V21.14h1.96V10.61h2.477a2.147 2.147 0 0 1 2.278 2.16 2.17 2.17 0 0 1-2.278 2.16h-1.042c-.459.067-.22.46-.22.46l3.956 5.75h2.214l-3.61-4.967Z" fill="#1D2434"></path></g><path fill="#DFE5F0" d="M103.244 3h1v24h-1z"></path><path d="M121.702 21V9.16h4.352c1.163 0 2.155.245 2.976.736a4.603 4.603 0 0 1 1.888 2.064c.427.885.64 1.925.64 3.12s-.224 2.24-.672 3.136a4.836 4.836 0 0 1-1.968 2.064c-.864.48-1.904.72-3.12.72h-4.096Zm4.096-1.488c1.334 0 2.352-.384 3.056-1.152.715-.768 1.072-1.861 1.072-3.28 0-1.419-.346-2.512-1.04-3.28-.682-.768-1.669-1.152-2.96-1.152h-2.656v8.864h2.528Zm11.281 1.712c-.8 0-1.498-.181-2.096-.544-.586-.373-1.04-.896-1.36-1.568-.32-.683-.48-1.477-.48-2.384 0-.917.16-1.712.48-2.384.32-.683.774-1.205 1.36-1.568.598-.373 1.296-.56 2.096-.56.79 0 1.483.187 2.08.56.598.363 1.056.885 1.376 1.568.331.672.496 1.467.496 2.384 0 .907-.165 1.701-.496 2.384a3.649 3.649 0 0 1-1.376 1.568c-.597.363-1.29.544-2.08.544Zm0-1.424c.736 0 1.318-.277 1.744-.832.438-.555.656-1.301.656-2.24 0-.95-.218-1.701-.656-2.256-.426-.555-1.008-.832-1.744-.832-.725 0-1.306.277-1.744.832-.426.555-.64 1.307-.64 2.256 0 .939.214 1.685.64 2.24.438.555 1.019.832 1.744.832Zm9.425 1.424c-.821 0-1.541-.187-2.16-.56-.608-.373-1.077-.901-1.408-1.584-.33-.683-.496-1.472-.496-2.368 0-.896.166-1.68.496-2.352.331-.683.8-1.205 1.408-1.568.619-.373 1.339-.56 2.16-.56.63 0 1.232.165 1.808.496.576.33 1.035.773 1.376 1.328l-1.184.832a2.702 2.702 0 0 0-.912-.896 2.209 2.209 0 0 0-1.184-.336c-.725 0-1.312.283-1.76.848-.437.555-.656 1.29-.656 2.208 0 .928.219 1.675.656 2.24.438.565 1.019.848 1.744.848.427 0 .822-.107 1.184-.32.374-.224.683-.528.928-.912l1.184.832c-.341.555-.8.997-1.376 1.328a3.578 3.578 0 0 1-1.808.496Zm7.762 0c-.821 0-1.53-.17-2.128-.512a3.623 3.623 0 0 1-1.344-1.376l1.184-.832c.555.917 1.334 1.376 2.336 1.376.512 0 .912-.101 1.2-.304a.95.95 0 0 0 .432-.816c0-.33-.149-.608-.448-.832-.298-.224-.784-.41-1.456-.56-.992-.224-1.744-.55-2.256-.976a2.113 2.113 0 0 1-.752-1.664c0-.768.283-1.376.848-1.824.576-.459 1.35-.688 2.32-.688.736 0 1.376.16 1.92.48.544.31.998.747 1.36 1.312l-1.168.832c-.266-.416-.581-.73-.944-.944a2.264 2.264 0 0 0-1.168-.32c-.501 0-.896.096-1.184.288a.91.91 0 0 0-.432.8c0 .619.662 1.077 1.984 1.376.95.213 1.675.533 2.176.96.502.427.752.95.752 1.568 0 .81-.293 1.456-.88 1.936-.586.48-1.37.72-2.352.72Z" fill="#1D1D1D"></path><defs><clipPath id="a"><path fill="#fff" d="M0 0h87.244v30H0z"></path></clipPath></defs></svg>
                    </div>
                </div> */}
                <div className="home-page-hero-right">
                    <a className="latest-button" href="https://www.meetup.com/apache-doris-meetup/events/303712793/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link">
                        <div className="home-page-hero-button-label"><div>Event</div></div>
                        <div className="latest-button-title">
                            {/* <div className="home-page-hero-button-icon">
                                <svg width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className="icon-svg" d="M18.19 11.13l-6.02 8.68c-.13.17-.4.08-.4-.13v-5.73c0-.43-.35-.77-.77-.77H5.97c-.18 0-.28-.2-.18-.35l6.01-8.69c.12-.18.39-.09.39.12V9.98c0 .42.34.76.76.76h5.02c.17 0 .27.19.17.34Zm1.26.87c.8-1.17-.03-2.76-1.45-2.76h-5.03l.76.76V4.277c0-1.73-2.22-2.42-3.2-1.01l-6.02 8.68c-.81 1.16.02 2.75 1.44 2.75h5.02l-.77-.77v5.72c0 1.72 2.21 2.41 3.19 1l6.01-8.69Z"></path>
                                    <path fill="none" d="M0 0h24v24H0Z"></path>
                                </svg>
                            </div> */}
                            <div style={{ marginBottom: 10 }}>Apache Doris Meetup @ Singapore on Oct 24</div>
                        </div>
                        <div style={{ fontSize: 12, marginBottom: 20 }}>This meetup brings together our main developers, users, and friends to discuss various topics, including technology introductions and user experiences.</div>
                        <div style={{ fontSize: 14, marginBottom: 10 }}>Join us</div>
                    </a>
                    <a className="latest-button" href={`/docs${currentVersion === '' ? '' : `/${currentVersion}`}/releasenotes/v2.0/release-2.0.15`}>
                        <div className="home-page-hero-button-label"><div>Release</div></div>
                        <div className="latest-button-title">
                            {/* <div className="home-page-hero-button-icon">
                                <svg width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className="icon-svg" d="M18.19 11.13l-6.02 8.68c-.13.17-.4.08-.4-.13v-5.73c0-.43-.35-.77-.77-.77H5.97c-.18 0-.28-.2-.18-.35l6.01-8.69c.12-.18.39-.09.39.12V9.98c0 .42.34.76.76.76h5.02c.17 0 .27.19.17.34Zm1.26.87c.8-1.17-.03-2.76-1.45-2.76h-5.03l.76.76V4.277c0-1.73-2.22-2.42-3.2-1.01l-6.02 8.68c-.81 1.16.02 2.75 1.44 2.75h5.02l-.77-.77v5.72c0 1.72 2.21 2.41 3.19 1l6.01-8.69Z"></path>
                                    <path fill="none" d="M0 0h24v24H0Z"></path>
                                </svg>
                            </div> */}
                            <div style={{ marginBottom: 10 }}>Apache Doris 2.0.15 just released</div>
                        </div>
                        <div style={{ fontSize: 12, marginBottom: 20 }}>Thanks to our community users and developers, about 157 improvements and bug fixes have been made in Doris 2.0.15 version.</div>
                        <div style={{ fontSize: 14, marginBottom: 10 }}>Learn more</div>
                    </a>
                </div>
                {/* <div style={{ fontSize: '1rem', fontWeight: 500, width: 600, marginTop: '1rem', color: '#1d1d1d' }}>学习路径</div> */}

            </div>
        </>


    );
}