import Image from "next/image";

import { books } from "@/data/books";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";
import { Separator } from "../ui/separator";

export function ReadingSection() {
  return (
    <>
      <Separator />

      <Section id="reading" className="py-20">
        <SiteContainer>
          <SectionHeading
            eyebrow="Reading"
            title="Books that shape my thinking"
            description="A selection of books that influence the way I write code, structure applications, and think about software quality."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {books.map((book) => (
              <Card
                key={book.id}
                className="flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-64 bg-muted">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline">{book.category}</Badge>
                  </div>

                  <div className="space-y-1">
                    <CardTitle className="line-clamp-2 text-xl">
                      {book.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {book.author}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="line-clamp-4 text-sm leading-7 text-muted-foreground">
                    {book.takeaway}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </Section>
    </>
  );
}
