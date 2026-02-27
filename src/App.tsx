/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Ceremony } from './components/Ceremony';
import { Reception } from './components/Reception';
import { Itinerary } from './components/Itinerary';
import { DressCode } from './components/DressCode';
import { Accommodation } from './components/Accommodation';
import { GiftRegistry } from './components/GiftRegistry';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <BackgroundDecorations />
      <div className="flex h-full grow flex-col">
        <Hero />
        <Countdown />
        <Story />
        <Gallery />
        <RSVP />
        <Ceremony />
        <Reception />
        <Itinerary />
        <DressCode />
        <Accommodation />
        <GiftRegistry />
        <Footer />
      </div>
    </div>
  );
}
