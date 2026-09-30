/**
 * LANDING PAGE COMPONENT
 * Renders the modern landing page showcasing hero statistics, multimodal vision capabilities,
 * architectural features, and diagnostic workflows.
 *
 * @component
 * @param {Object} props
 * @param {(page: 'home' | 'scan' | 'results') => void} props.onNavigate - Navigation callback to transition between views
 * @returns {JSX.Element}
 */
function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Medical <span className="gradient-text">Chatbot Assistant</span>
          </h1>
          
          <p className="hero-description">
            A fast, straightforward tool for analyzing scans and detecting pulmonary nodules. 
            It combines visual detection with a medical RAG assistant to give you clear, actionable insights in seconds.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary-large" onClick={() => onNavigate('scan')}>
              <span>Start Scan Analysis</span>
              <span>→</span>
            </button>
            <button className="btn-secondary-large" onClick={() => onNavigate('scan')}>
              <span>Learn More</span>
              <span>↓</span>
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">AI-Driven</div>
              <div className="stat-label">Vision Analysis</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">Real-Time</div>
              <div className="stat-label">RAG Chatbot</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">Evidence-Based</div>
              <div className="stat-label">Clinical Guidelines</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-container">
            {/* Floating Cards */}
            
            <div className="floating-card card-2">
              <div className="card-icon">🔬</div>
              <div className="card-title">AI Detection</div>
            </div>
            
            <div className="floating-card card-3">
              <div className="card-icon">📊</div>
              <div className="card-title">Detailed Reports</div>
            </div>
            
            {/* Glow Orbs */}
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose <span className="gradient-text">PulmoAI</span>?</h2>
          <p className="section-subtitle">
            Cutting-edge technology meets medical expertise to deliver unparalleled diagnostic support
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">🤖</div>
            </div>
            <h3>Vision AI Analysis</h3>
            <p>
              Uses Google Gemini Vision to scan uploaded medical images and identify potential pulmonary nodules.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">⚡</div>
            </div>
            <h3>Fast Processing</h3>
            <p>
              Returns structured diagnostic data, measurements, and risk assessments in just a few seconds.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon">💬</div>
            </div>
            <h3>RAG Chatbot</h3>
            <p>
              Connects to a Pinecone vector database of medical data to answer your questions accurately.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
          <p className="section-subtitle">
            Simple, fast, and accurate - get your scan analysis in three easy steps
          </p>
        </div>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Upload Scan</h3>
              <p>
                Simply upload your scan image in JPEG or PNG format. Our system accepts standard scan formats.
              </p>
            </div>
          </div>
          
          <div className="step-connector">→</div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>
                Our advanced AI algorithms process the scan in real-time, detecting and analyzing any pulmonary nodules present.
              </p>
            </div>
          </div>
          
          <div className="step-connector">→</div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Get Results</h3>
              <p>
                Receive a comprehensive analysis report with nodule detection, risk assessment, and clinical recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Experience the Future of AI Diagnostics?</h2>
          <p>
            Start analyzing scans with our advanced AI platform today and join thousands of healthcare professionals 
            who trust PulmoAI for accurate pulmonary nodule detection.
          </p>
          <button className="btn-cta" onClick={() => onNavigate('scan')}>
            <span>Start Your First Scan</span>
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
