import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Heart, Target, Eye, Users } from 'lucide-react';
import Card from '../components/ui/Card';
import { teamMembers } from '../data/mockData';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        padding: '4rem 5%',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
        color: 'var(--color-white)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2rem' }}>
          <Heart size={48} />
          <h1 style={{ fontSize: '3.5rem', margin: 0 }}>About Calmify</h1>
        </div>
        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Committed to delivering tools for excellence and innovation in personal wellbeing, 
          one gentle interaction at a time.
        </p>
      </div>

      <div className="container">
        {/* Mission & Vision Section */}
        <section style={{ padding: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <Card style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <Target size={48} color="var(--color-primary)" style={{ margin: '0 auto' }} />
              </div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Mission</h2>
              <p style={{ lineHeight: '1.7', color: '#6b7280' }}>
                Our mission is to empower individuals with simple, effective, and private digital tools 
                to help them achieve greater emotional awareness and growth in a rapidly evolving world. 
                We believe technology should be a gentle companion on your wellness journey.
              </p>
            </Card>

            <Card style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <Eye size={48} color="var(--color-secondary)" style={{ margin: '0 auto' }} />
              </div>
              <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Our Vision</h2>
              <p style={{ lineHeight: '1.7', color: '#6b7280' }}>
                We envision a future where technology can be a gentle and supportive partner in mental wellbeing, 
                making it easier for people to connect with themselves and navigate life's challenges with 
                greater understanding and compassion.
              </p>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ 
          padding: '4rem 2rem', 
          backgroundColor: 'var(--color-light-gray)', 
          borderRadius: 'var(--border-radius)',
          margin: '2rem 0'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Core Values</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--color-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Heart size={32} color="white" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Empathy First</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Every design decision is made with deep consideration for the user's emotional state and needs.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--color-secondary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Target size={32} color="white" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Privacy by Design</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Your data never leaves your device. We believe privacy is a fundamental right, not a feature.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--color-accent)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Users size={32} color="white" />
              </div>
              <h3 style={{ marginBottom: '1rem' }}>Inclusive Wellness</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Mental health support should be accessible to everyone, regardless of background or circumstance.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1rem' }}>
            <Users size={32} color="var(--color-primary)" />
            <h2 style={{ margin: 0 }}>Meet Our Team</h2>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            The passionate advocates and developers who believe in the power of empathetic technology.
          </p>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            style={{ padding: '2rem 0' }}
          >
            {teamMembers.map(member => (
              <SwiperSlide key={member.id}>
                <Card style={{ alignItems: 'center', textAlign: 'center', height: 'auto' }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    border: '4px solid var(--color-primary)',
                  }}>
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }} 
                    />
                  </div>
                  <h4 style={{ margin: '0 0 0.5rem', color: 'var(--color-text)' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: '500' }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                    {member.bio}
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Story Section */}
        <section style={{ 
          padding: '4rem 0',
          borderTop: '1px solid #e5e7eb',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Our Story</h2>
            <div style={{ textAlign: 'left', lineHeight: '1.8', color: '#6b7280' }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Calmify was born from a simple observation: while technology has transformed nearly every aspect 
                of our lives, mental health tools often felt cold, clinical, or invasive. We saw people struggling 
                with apps that prioritized engagement over wellbeing, data collection over privacy.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Our founders, a diverse team of technologists, mental health advocates, and designers, came together 
                with a shared vision: what if we could create digital tools that truly served the user's wellbeing, 
                not corporate metrics?
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Every line of code, every design decision, and every feature in Calmify reflects our commitment 
                to creating technology that heals rather than harms. We believe that the best mental health tools 
                are those that empower users while respecting their autonomy and privacy.
              </p>
              <p style={{ 
                fontStyle: 'italic', 
                textAlign: 'center', 
                color: 'var(--color-primary)', 
                fontWeight: '500',
                margin: '2rem 0 0'
              }}>
                "Technology should be a gentle companion on your wellness journey, not another source of stress."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;