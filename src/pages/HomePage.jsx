import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import MoodTracker from '../components/features/MoodTracker';
import JournalEntry from '../components/features/JournalEntry';
import ProgressChart from '../components/features/ProgressChart';
import { communityStories } from '../data/mockData';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--color-white)',
        background: `linear-gradient(135deg, rgba(174, 198, 207, 0.9), rgba(179, 226, 205, 0.9)), url('https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '800px', padding: '0 2rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '2rem' 
          }}>
            <Heart size={48} />
            <h1 style={{ fontSize: '3.5rem', marginBottom: 0 }}>Calmify</h1>
          </div>
          <p style={{ fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Your personal space for reflection and growth. A quiet corner on the internet to understand your mind, one day at a time.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/features">
              <Button variant="accent" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                Explore Tools
              </Button>
            </Link>
            <Link to="/resources">
              <Button style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'var(--color-white)',
                fontSize: '1.1rem', 
                padding: '16px 32px',
                backdropFilter: 'blur(10px)'
              }}>
                Find Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Philosophy Section */}
        <section style={{ padding: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
            Built with Care, Designed for You
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <Shield size={32} color="var(--color-primary)" />
                  <h3 style={{ margin: 0 }}>Complete Privacy, Always</h3>
                </div>
                <p style={{ lineHeight: '1.7', color: '#6b7280' }}>
                  Your thoughts and feelings are yours alone. All data is stored locally on your device, 
                  ensuring that your private reflections remain private. We believe in creating a sanctuary, not a data mine.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Privacy and security" 
                  style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} 
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexDirection: 'row-reverse' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                  <Heart size={32} color="var(--color-secondary)" />
                  <h3 style={{ margin: 0 }}>Guided by Empathy</h3>
                </div>
                <p style={{ lineHeight: '1.7', color: '#6b7280' }}>
                  Every feature is designed with care, focusing on gentle encouragement and non-judgmental support. 
                  Our tools empower you without pressure. Your wellbeing is our only metric of success.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Empathy and care" 
                  style={{ width: '100%', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-light-gray)', margin: '0 -2rem', padding: '4rem 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Start Your Journey Today</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <MoodTracker />
            <JournalEntry />
            <div style={{ gridColumn: 'span 1' }}>
              <ProgressChart />
            </div>
          </div>
        </section>

        {/* Community Stories Section */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <Users size={32} color="var(--color-primary)" />
            <h2 style={{ margin: 0 }}>Words from Our Community</h2>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Real experiences from people who have found peace and growth with Calmify.
          </p>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '2rem 0' }}
          >
            {communityStories.map(story => (
              <SwiperSlide key={story.id}>
                <Card style={{ textAlign: 'left', height: 'auto' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <Sparkles size={24} color="var(--color-accent)" />
                  </div>
                  <p style={{ fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    "{story.quote}"
                  </p>
                  <p style={{ fontWeight: '600', color: 'var(--color-primary)', margin: 0 }}>
                    — {story.name}
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Call to Action */}
        <section style={{ 
          padding: '4rem 2rem', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          borderRadius: 'var(--border-radius)',
          color: 'var(--color-white)',
          margin: '2rem 0'
        }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Ready to Begin?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Take the first step towards better mental wellbeing. Your journey of self-discovery starts here.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/features">
              <Button style={{ 
                backgroundColor: 'var(--color-white)', 
                color: 'var(--color-primary)',
                fontSize: '1.1rem',
                padding: '16px 32px'
              }}>
                Start Tracking
              </Button>
            </Link>
            <Link to="/about">
              <Button style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                color: 'var(--color-white)',
                fontSize: '1.1rem',
                padding: '16px 32px'
              }}>
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;