-- Kullanıcılar (admin erişimi)
CREATE TABLE admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- İlk Admin Kullanıcısı (kullanıcı: admin, şifre: Havk2024! için bcrypt hash)
-- Şifreler düz metin olarak değil bcrypt ile saklanmalı. Örnek hash:
INSERT INTO admins (username, password_hash) VALUES ('admin', '$2a$12$N9/E7L7k.n6P.j/vN2uXueD9lYI3J6tQ.K8z42L0t5l2x4mRyVz76');

-- Etkinlikler
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  tag TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Galeri
CREATE TABLE gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  image_url TEXT NOT NULL,
  media_type TEXT DEFAULT 'image',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Hakkımızda & Vizyon
CREATE TABLE site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key TEXT UNIQUE NOT NULL, -- 'misyon', 'vizyon'
  content TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Varsayılan İçerikler
INSERT INTO site_content (section_key, content) VALUES
('misyon', 'Askeri, sivil, sportif ve uzay havacılığı alanlarında farkındalık oluşturmak amacıyla söyleşiler, atölye çalışmaları, kariyer günleri ve staj buluşmaları düzenliyoruz. Üyelerimize sektördeki güncel gelişmeleri aktarıyor, staj ve iş fırsatlarını duyurarak sektöre nitelikli bireyler kazandırmayı hedefliyoruz. Uzmanlarla işbirliği yaparak fuarlar, yarışmalar ve sosyal sorumluluk projeleri gerçekleştiriyoruz. Tüm bu faaliyetlerle ÇOMÜ''yü havacılık alanında en iyi şekilde temsil etmeyi amaçlıyoruz.'),
('vizyon', 'Çanakkale Onsekiz Mart Üniversitesi Havacılık Kulübü, üniversiteyi her türlü askeri, sivil, sportif ve uzay havacılığı alanlarında en etkin bir şekilde temsil eden bir topluluk olmayı vizyon edinir. Havacılık sektöründeki gelişmeleri takip eden, yenilikçi ve öncü bir kulüp olarak tanınmayı hedefler. Üyelerine zengin bir havacılık deneyimi sunarak, sektörde hakim havacılık kültürüne edinmiş ve bu alanda üreten bireyler yetiştirmeyi amaçlar. Havacılığa ilgi duyan her disiplinden kişinin bu alanda bir şeyler üretebileceğine inanır ve bu doğrultuda üyeleri arasında disiplinlerarası işbirliği ve üretkenliği teşvik eder.');
