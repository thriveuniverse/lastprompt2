-- Create the leads table in Supabase
CREATE TABLE leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    segment TEXT, -- e.g., "player", "b2b"
    interest TEXT, -- e.g., "colony", "corporate", "both"
    company_name TEXT,
    job_title TEXT,
    campaign_source TEXT, -- e.g., "banner_ad_feb2026", "newsletter_march2026"
    webpage_url TEXT, -- Full URL of the page where the lead was captured
    metadata JSONB, -- Optional metadata (e.g., UTM parameters, A/B test variants)
    gdpr_consent BOOLEAN NOT NULL DEFAULT FALSE,
    consent_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for efficient querying
CREATE INDEX idx_leads_email ON leads (email);
CREATE INDEX idx_leads_campaign_source ON leads (campaign_source);
CREATE INDEX idx_leads_created_at ON leads (created_at);

-- Example: Insert a lead
-- INSERT INTO leads (name, email, segment, interest, campaign_source, webpage_url, metadata, gdpr_consent, consent_date)
-- VALUES ('John Doe', 'john.doe@example.com', 'player', 'colony', 'banner_ad_feb2026', 'https://example.com/landing', '{"utm_source": "google", "utm_campaign": "spring_sale"}', TRUE, NOW());