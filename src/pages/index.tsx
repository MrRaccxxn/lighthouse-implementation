import { Container } from "@/common/layout/Container";
import ClientRehydration from "@/common/utils/ClientRehydration";
import { Home } from "@/modules/home";

export default function HomePage() {
  return (
    <ClientRehydration>
      <Container>
        <Home />
      </Container>
    </ClientRehydration>
  )
}