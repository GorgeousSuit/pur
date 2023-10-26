'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
import Head from 'next/head';

export default function AdminPage() {
    return (
        <div className="">
            <Head>
                <link
                    rel="icon"
                    href="/assets/icons/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <NextStudio config={config} />
        </div>
    );
}
