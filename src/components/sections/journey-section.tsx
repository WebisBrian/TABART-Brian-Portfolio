"use client";

import { useState } from "react";
import Image from "next/image";

import { journeySteps } from "@/data/journey";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

export function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = journeySteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? journeySteps.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === journeySteps.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <>

      <Section id="journey" className="py-20">
        <SiteContainer>
          <SectionHeading
            eyebrow="Journey"
            title="A few key stages"
            description="Three important periods that shaped the way I work, learn, and build today."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Image */}
            <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0 overflow-hidden rounded-3xl  bg-muted">
                <Image
                  src={activeStep.image}
                  alt={`${activeStep.period} illustration`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 space-y-8 lg:order-2">
              {/* Step navigation */}
              <div className="flex flex-wrap gap-3">
                {journeySteps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "cursor-pointer inline-flex min-w-[120px] items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground hover:text-foreground",
                      )}
                      aria-pressed={isActive}
                    >
                      <StepIcon className="h-4 w-4" />
                      {step.period}
                    </button>
                  );
                })}
              </div>

              {/* Card */}
              <Card className="mx-auto w-full max-w-md lg:max-w-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ActiveIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {activeStep.period}
                    </p>

                    <CardTitle className="text-2xl">
                      {activeStep.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {activeStep.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeStep.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToPrevious}
                  >
                    Previous
                  </Button>

                  <Button type="button" variant="outline" onClick={goToNext}>
                    Next
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </SiteContainer>
      </Section>
    </>
  );
}
