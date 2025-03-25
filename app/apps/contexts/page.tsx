import Hero from '../../components/Hero'
import KeyFeatures from '../../components/ContextsFeatures'
import ContactForm from '../../components/ContactForm'

export default function ContextsApp() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <Hero />
      </div>
      <KeyFeatures />
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  )
}
