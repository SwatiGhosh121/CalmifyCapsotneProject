import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Clock, Tag } from 'lucide-react';
import { getMentalHealthResources } from '../api/resources';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Anxiety', 'Depression', 'Stress', 'Resilience', 'Sleep', 'Mindfulness'];

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const data = await getMentalHealthResources();
        setResources(data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        padding: '4rem 5%',
        textAlign: 'center',
        background: `linear-gradient(135deg, rgba(179, 226, 205, 0.9), rgba(174, 198, 207, 0.9)), url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'var(--color-white)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '2rem' }}>
          <BookOpen size={48} />
          <h1 style={{ fontSize: '3.5rem', margin: 0 }}>Wellness Resources</h1>
        </div>
        <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Explore expert insights and evidence-based resources to support your mental health journey. 
          All content is sourced from trusted healthcare professionals.
        </p>
      </div>

      <div className="container">
        {/* Category Filter */}
        <section style={{ padding: '2rem 0' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'primary' : 'secondary'}
                style={{
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  backgroundColor: selectedCategory === category 
                    ? 'var(--color-primary)' 
                    : 'var(--color-light-gray)',
                  color: selectedCategory === category 
                    ? 'var(--color-white)' 
                    : 'var(--color-text)',
                }}
              >
                <Tag size={16} />
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Resources Grid */}
        <section style={{ padding: '2rem 0' }}>
          {loading ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem 0',
              color: '#6b7280'
            }}>
              <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.1rem' }}>Loading wellness resources...</p>
              <p style={{ fontSize: '0.9rem' }}>Gathering the latest expert guidance for you.</p>
            </div>
          ) : (
            <>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {filteredResources.map((resource) => (
                  <Card key={resource.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {resource.category}
                      </span>
                      <span style={{
                        color: '#6b7280',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Clock size={14} />
                        {resource.source}
                      </span>
                    </div>

                    <h3 style={{ 
                      marginBottom: '1rem', 
                      color: 'var(--color-text)',
                      lineHeight: '1.3'
                    }}>
                      {resource.title}
                    </h3>
                    
                    <p style={{ 
                      flex: 1, 
                      color: '#6b7280', 
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {resource.description}
                    </p>
                    
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--color-primary)',
                        fontWeight: '500',
                        textDecoration: 'none',
                        padding: '8px 0',
                        borderTop: '1px solid #e5e7eb',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--color-primary)';
                      }}
                    >
                      Read Full Article
                      <ExternalLink size={16} />
                    </a>
                  </Card>
                ))}
              </div>

              {/* Attribution Section */}
              <div style={{
                padding: '2rem',
                backgroundColor: 'var(--color-light-gray)',
                borderRadius: 'var(--border-radius)',
                textAlign: 'center',
                border: '2px solid #e5e7eb'
              }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>
                  Content Attribution
                </h4>
                <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
                  All mental health resources are sourced from trusted healthcare providers and professional organizations.
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="https://www.nhs.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                  >
                    <img 
                      src="https://assets.nhs.uk/nhsuk-cms/images/favicon.ico" 
                      alt="NHS" 
                      style={{ width: '24px', height: '24px' }}
                    />
                    NHS UK - Official Health Information
                  </a>
                </div>
                <p style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.85rem', 
                  color: '#9ca3af',
                  fontStyle: 'italic'
                }}>
                  Calmify curates but does not create this content. Always consult healthcare professionals for personalized advice.
                </p>
              </div>
            </>
          )}
        </section>

        {/* Help Section */}
        <section style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--color-secondary), var(--color-primary))',
          borderRadius: 'var(--border-radius)',
          color: 'var(--color-white)',
          margin: '3rem 0'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Need Immediate Support?</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.6', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            If you're experiencing a mental health crisis, please reach out for immediate professional help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.samaritans.org/how-we-can-help/contact-samaritans/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button style={{
                backgroundColor: 'var(--color-white)',
                color: 'var(--color-primary)',
                fontSize: '1rem',
                padding: '12px 24px'
              }}>
                Crisis Support: Samaritans
              </Button>
            </a>
            <a 
              href="https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'var(--color-white)',
                fontSize: '1rem',
                padding: '12px 24px'
              }}>
                Find Local Help
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;