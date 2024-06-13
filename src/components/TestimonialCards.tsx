'use client'

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const photographySchoolTestimonials = [
  {
  quote:
  'Joining the photography school transformed my understanding of photography and helped me to truly discover my own style. The instructors are world-class!',
  name: 'Alex Johnson',
  title: 'Beginner Photography Student',
  },
  {
  quote:
  "The community and support at this school are unmatched. I've grown not just as a photographer, but also as an artist, thanks to their comprehensive approach.",
  name: 'Samantha Lee',
  title: 'Portrait Photography Student',
  },
  {
  quote:
  "This school offered me the tools and confidence to take my photography to the next level. I'm endlessly grateful for the personalized coaching.",
  name: 'Michael Chen',
  title: 'Advanced Photography Student',
  },
  {
  quote:
  'As a landscape photographer, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
  name: 'Emily Taylor',
  title: 'Landscape Photography Student',
  },
  {
  quote:
  'The editing courses here opened my eyes to the intricacies of photo editing. Highly recommend for any aspiring photographers!',
  name: 'Chris Morales',
  title: 'Photo Editing Student',
  },
  ];
function PhotographySchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.1] 
        relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={photographySchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default PhotographySchoolTestimonials