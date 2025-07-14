'use client';
import React from 'react';
import BackgroundShapes from './BackgroundShapes';
import LeftContent from './LeftContent';
import RightBanner from './RightBanner';

export default function BannerHero() {
    return (
        <section className="relative overflow-hidden min-h-fit h-fit py-16 px-4 md:px-4 bg-white w-full">
            <BackgroundShapes />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-screen">
                <LeftContent />
                <RightBanner />
            </div>
        </section>
    );
}
