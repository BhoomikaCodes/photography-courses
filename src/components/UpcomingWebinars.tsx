"use client"
import Link from "../../node_modules/next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars = [
      {
      title: 'Understanding Photography Basics',
      description:
      'Dive deep into the fundamentals of photography and enhance your photographic skills.',
      slug: 'understanding-photography-basics',
      isFeatured: true,
      },
      {
      title: 'The Art of Composition',
      description:
      'Learn the craft of composition from experienced photographers and artists.',
      slug: 'the-art-of-composition',
      isFeatured: true,
      },
      {
      title: 'Mastering Your Camera',
      description:
      'Advanced techniques to master your camera and improve your photography.',
      slug: 'mastering-your-camera',
      isFeatured: true,
      },
      {
      title: 'Photo Editing Essentials',
      description:
      'Get started with photo editing with this comprehensive overview.',
      slug: 'photo-editing-essentials',
      isFeatured: true,
      },
      {
      title: 'Lighting Techniques for Photography',
      description:
      'Enhance your lighting skills with expert tips and strategies.',
      slug: 'lighting-techniques-for-photography',
      isFeatured: true,
      },
      {
      title: 'Digital Photography Marketing',
      description:
      'Learn how to promote your photography effectively in the digital age.',
      slug: 'digital-photography-marketing',
      isFeatured: true,
      },
      ];

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Photographic Journey</p>
            </div>

            <div className="mt-10">
                <HoverEffect
                    items={featuredWebinars.map(webinar => (
                        {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                        }
                    ))}
                    />
            </div>

            <div className="mt-10 text-center">
                <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars