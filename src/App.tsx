import { Menu, X, Calendar, MessageCircle, Shield, Heart, Brain, Users } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-sage-600" />
              <div>
                <h1 className="text-xl font-semibold text-stone-900">Dr. Maya Reynolds</h1>
                <p className="text-xs text-stone-600">Licensed Clinical Psychologist, PsyD</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-stone-700 hover:text-sage-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-stone-700 hover:text-sage-600 transition-colors font-medium">Services</a>
              <a href="#approach" className="text-stone-700 hover:text-sage-600 transition-colors font-medium">Approach</a>
              <a href="#contact" className="text-stone-700 hover:text-sage-600 transition-colors font-medium">Contact</a>
              <button className="bg-sage-600 text-white px-6 py-2.5 rounded-lg hover:bg-sage-700 transition-colors font-medium">
                Book Session
              </button>
            </div>

            <button
              className="md:hidden text-stone-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-stone-200">
              <a href="#about" className="block text-stone-700 hover:text-sage-600 transition-colors py-2">About</a>
              <a href="#services" className="block text-stone-700 hover:text-sage-600 transition-colors py-2">Services</a>
              <a href="#approach" className="block text-stone-700 hover:text-sage-600 transition-colors py-2">Approach</a>
              <a href="#contact" className="block text-stone-700 hover:text-sage-600 transition-colors py-2">Contact</a>
              <button className="w-full bg-sage-600 text-white px-6 py-2.5 rounded-lg hover:bg-sage-700 transition-colors">
                Book Session
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-sage-50 via-stone-50 to-coral-50 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium">
                  Accepting New Clients
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                  Your Journey to <span className="text-sage-600">Healing</span> Starts Here
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Compassionate, evidence-based therapy for anxiety, depression, trauma, and life transitions.
                  Together, we'll navigate the path to your well-being.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-sage-600 text-white px-8 py-4 rounded-lg hover:bg-sage-700 transition-all hover:shadow-lg font-medium text-lg">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-lg hover:border-sage-600 hover:text-sage-600 transition-all font-medium text-lg">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage-100 to-coral-100 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Therapy session"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dr. Maya Reynolds"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-stone-900">About Dr. Reynolds</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  With over 12 years of experience in clinical psychology, I specialize in helping individuals
                  navigate life's most challenging moments with compassion and evidence-based care.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  I earned my PsyD from the California School of Professional Psychology and completed my clinical
                  training at Stanford Medical Center. My approach integrates cognitive-behavioral therapy,
                  mindfulness practices, and trauma-informed care.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-stone-900">Licensed & Certified</h4>
                      <p className="text-stone-600">California Board of Psychology, License #PSY12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-coral-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-stone-900">Specialized Training</h4>
                      <p className="text-stone-600">EMDR, DBT, and Trauma-Focused CBT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">Services Offered</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Personalized therapy tailored to your unique needs and goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Anxiety & Depression',
                  description: 'Evidence-based treatment for managing overwhelming thoughts, worry, and mood disorders.',
                  color: 'sage'
                },
                {
                  icon: Heart,
                  title: 'Trauma & PTSD',
                  description: 'Specialized trauma-informed care using EMDR and other proven therapeutic modalities.',
                  color: 'coral'
                },
                {
                  icon: Users,
                  title: 'Relationship Issues',
                  description: 'Navigate relationship challenges, communication patterns, and attachment concerns.',
                  color: 'sage'
                },
                {
                  icon: MessageCircle,
                  title: 'Life Transitions',
                  description: 'Support through major life changes, career shifts, loss, and identity exploration.',
                  color: 'coral'
                },
                {
                  icon: Shield,
                  title: 'Stress Management',
                  description: 'Develop healthy coping strategies and build resilience for daily stressors.',
                  color: 'sage'
                },
                {
                  icon: Calendar,
                  title: 'Personal Growth',
                  description: 'Enhance self-awareness, confidence, and cultivate a more fulfilling life.',
                  color: 'coral'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-stone-200 group"
                >
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    service.color === 'sage' ? 'bg-sage-100' : 'bg-coral-100'
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      service.color === 'sage' ? 'text-sage-600' : 'text-coral-500'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="py-20 bg-gradient-to-br from-sage-600 to-sage-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Therapeutic Approach</h2>
              <p className="text-xl text-sage-100 max-w-2xl mx-auto">
                A holistic, collaborative approach centered on your healing and growth
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Evidence-Based',
                  description: 'I utilize proven therapeutic methods backed by research, including CBT, EMDR, and mindfulness practices.'
                },
                {
                  title: 'Client-Centered',
                  description: 'Your needs, goals, and experiences guide our work together. You are the expert on your own life.'
                },
                {
                  title: 'Culturally Responsive',
                  description: 'I honor your unique identity and background, creating an inclusive and affirming therapeutic space.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sage-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">What to Expect</h2>
            <p className="text-xl text-stone-600 leading-relaxed mb-8">
              Therapy is a collaborative journey. In our first session, we'll discuss your concerns, goals, and
              what brings you to therapy. Together, we'll create a treatment plan tailored to your needs.
            </p>
            <div className="bg-sage-50 p-8 rounded-2xl border-2 border-sage-200 space-y-4">
              <p className="text-lg text-stone-700">
                <strong className="text-sage-700">Sessions:</strong> 50-minute individual sessions, weekly or bi-weekly
              </p>
              <p className="text-lg text-stone-700">
                <strong className="text-sage-700">Format:</strong> In-person (San Francisco) or secure telehealth
              </p>
              <p className="text-lg text-stone-700">
                <strong className="text-sage-700">Insurance:</strong> Accepted providers include Blue Cross, Aetna, and Cigna
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-stone-600">
                Ready to take the first step? I offer a free 15-minute consultation.
              </p>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-stone-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me a bit about what brings you to therapy..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sage-600 text-white px-8 py-4 rounded-lg hover:bg-sage-700 transition-all hover:shadow-lg font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-sage-400" />
                <span className="font-semibold text-white text-lg">Dr. Maya Reynolds</span>
              </div>
              <p className="text-sm text-stone-400">
                Licensed Clinical Psychologist providing compassionate, evidence-based care in San Francisco.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm text-stone-400 mb-2">123 Market Street, Suite 400</p>
              <p className="text-sm text-stone-400 mb-2">San Francisco, CA 94103</p>
              <p className="text-sm text-stone-400 mb-2">Phone: (555) 123-4567</p>
              <p className="text-sm text-stone-400">Email: dr.reynolds@example.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Office Hours</h4>
              <p className="text-sm text-stone-400 mb-2">Monday - Thursday: 9am - 7pm</p>
              <p className="text-sm text-stone-400 mb-2">Friday: 9am - 5pm</p>
              <p className="text-sm text-stone-400">Weekend: By appointment</p>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-sm text-stone-400">
            <p>&copy; 2024 Dr. Maya Reynolds, PsyD. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
