
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RocketIcon, StarIcon, UsersIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Giga Academy</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          Web3 Education Reinvented — Learn-to-Earn, NFT Courses, DAO Governance
        </p>
        <div className="mt-6">
          <Button className="text-lg px-6 py-3">Join Waitlist</Button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-20">
        <Card>
          <CardContent className="p-6">
            <RocketIcon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn-to-Earn</h3>
            <p>Get rewarded with $KNOW tokens as you learn. Incentivize your journey.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <StarIcon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">NFT Courses</h3>
            <p>Own your education with tradable NFT certificates on the XDC blockchain.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <UsersIcon className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">DAO Governance</h3>
            <p>Shape the platform via a community-led DAO structure with EDU tokens.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-400">
        © 2025 Giga Academy — Built on XDC Blockchain
      </footer>
    </div>
  );
}
