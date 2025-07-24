import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BookOpen, BarChart3, Shield, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { appFeatures } from '../data/mockData';

const FeaturesPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(appFeatures[0]);

  const getFeatureIcon = (title) => {
    switch (title) {
      case 'Mood Tracker': return <Heart size={32} color="var(--color-primary)" />;
      case 'Private Journal': return <BookOpen size={32} color="var(--color-secondary)" />;
      case 'Progress Insights': return <BarChart3 size={32} color="var(--color-accent)" />;
      case 'Wellness Resources': return <Shield size={32} color="var(--color-primary)" />;
      default: return <Heart size={32} color="var(--color-primary)" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        padding: '4rem 5%',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        color: 'var(--color-white)',
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Features & Tools</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Thoughtfully designed tools for your personal journey of self-discovery and wellbeing. 
          Each feature is crafted with empathy and respect for your privacy.
        </p>
      </div>

      <div className="container">
        {/* Interactive Feature Carousel */}
        <section style={{ padding: '4rem 0' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Explore Our Tools</h2>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            onSlideChange={(swiper) => setSelectedFeature(appFeatures[swiper.realIndex])}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '2rem 0', cursor: 'pointer' }}
          >
            {appFeatures.map(feature => (
              <SwiperSlide key={feature.id}>
                <Card 
                  style={{
                    textAlign: 'center',
                    border: selectedFeature.id === feature.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                    transform: selectedFeature.id === feature.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    {getFeatureIcon(feature.title)}
                  </div>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>{feature.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    {feature.description.substring(0, 100)}...
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Detailed Feature Description */}
        {selectedFeature && (
          <section style={{
            padding: '0 0 4rem 0',
            animation: 'fadeIn 0.5s ease-in-out',
          }}>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  {getFeatureIcon(selectedFeature.title)}
                  <h2 style={{ margin: 0, fontSize: '2.5rem' }}>{selectedFeature.title}</h2>
                </div>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7', 
                  color: '#6b7280', 
                  marginBottom: '2rem' 
                }}>
                  {selectedFeature.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Key Benefits:</h4>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '0.5rem' 
                  }}>
                    {selectedFeature.benefits.map((benefit, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px',
                        color: '#6b7280'
                      }}>
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          backgroundColor: 'var(--color-primary)', 
                          borderRadius: '50%' 
                        }}></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                  Try This Tool
                </Button>
              </div>

              <div>
                <img 
                  src={`https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={selectedFeature.title} 
                  style={{ 
                    width: '100%', 
                    borderRadius: 'var(--border-radius)', 
                    boxShadow: 'var(--box-shadow-hover)',
                    transition: 'var(--transition)'
                  }} 
                />
              </div>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        <section style={{ 
          padding: '4rem 2rem', 
          backgroundColor: 'var(--color-light-gray)', 
          borderRadius: 'var(--border-radius)',
          margin: '3rem 0'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h4 style={{ marginBottom: '1rem' }}>Choose Your Tool</h4>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Select from our carefully designed features based on what feels right for you today.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h4 style={{ marginBottom: '1rem' }}>Reflect & Record</h4>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Take a moment to check in with yourself. Your thoughts and feelings are stored safely on your device.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h4 style={{ marginBottom: '1rem' }}>Discover Patterns</h4>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Over time, gain insights into your emotional patterns and celebrate your progress.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Guarantee */}
        <section style={{ 
          padding: '3rem', 
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          borderRadius: 'var(--border-radius)',
          color: 'var(--color-white)'
        }}>
          <Shield size={48} style={{ marginBottom: '1rem' }} />
          <h2 style={{ marginBottom: '1rem' }}>Your Privacy, Guaranteed</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Every feature operates with complete privacy. Your data never leaves your device, 
            and we never track your activities. Your mental health journey is yours alone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;