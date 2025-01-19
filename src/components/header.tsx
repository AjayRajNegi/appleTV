import { Button } from "./button";
import { Container } from "./container";

export const Header = () => {
  return (
    <>
      <header className="relative z-20 bg-backgroundContrast text-white">
        <Container className="flex min-h-11 items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
            A <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 z-20 bg-backgroundContrast text-white">
        <Container className="flex min-h-11 items-center justify-between">
          <p className="text-xl font-semibold">Apple TV +</p>
          <Button size="sm">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};
