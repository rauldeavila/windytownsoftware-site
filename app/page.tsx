import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProductShowcase />
      <ContactForm />
    </div>
  )
}

