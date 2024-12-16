import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface CardProps {
  id: number;
  title: string;
  image: string;
  description1: string;
  description2: string;
}

interface CardsProps {
  title: string;
  cardsHeader: React.ReactNode;
  cards: CardProps[];
  navigateTo: string;
  pagination: boolean;
}

const Cards: React.FC<CardsProps> = ({ title, cards, navigateTo, cardsHeader, pagination }) => {
  const router = useRouter();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-xl font-bold">{title}</h1>

      {cardsHeader}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-5 border rounded-lg shadow bg-white hover:cursor-pointer hover:scale-105 duration-300"
            onClick={() => router.push(navigateTo)}
          >
            <h2 className="text-lg font-bold mb-2">{card.title}</h2>
            <div className="flex">
              <Image
                src={card.image}
                alt={`Class ${card.id}`}
                width={60}
                height={20}
              />
              <div className="ml-4 flex flex-col justify-center">
                <p className="text-sm text-gray-700 font-bold">{card.description1}</p>
                <p className="text-sm text-gray-500 mt-2">{card.description2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {pagination &&
        <Pagination className="mt-48">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">67</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      }
    </div>
  );
};

export default Cards;
