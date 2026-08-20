import re

# Fix index.html
with open('index.html', 'r') as f:
    content = f.read()

# 1. Fix Infentra Laravel tag in index.html
content = content.replace('<span>HTML/CSS</span>', '<span>Laravel</span>')

# 2. Fix About text in index.html to make it shorter but keep SEO
old_about = "I'm Muhammad Omar Nadiv, an Informatics Engineering student and <strong>Freelance Web Developer</strong> based in Purwokerto, Indonesia. I don't just write code, I design scalable web systems, optimize SEO, and <span>craft digital experiences</span> that actually feel good to use."
new_about = "I'm Muhammad Omar Nadiv, a <strong>Freelance Web Developer</strong> based in Purwokerto. I build scalable systems and <span>craft digital experiences</span> that actually feel good to use."
content = content.replace(old_about, new_about)

with open('index.html', 'w') as f:
    f.write(content)


# Fix projects/index.html
with open('projects/index.html', 'r') as f:
    p_content = f.read()

# Fix Infentra Laravel tag in projects/index.html
# It currently has: <span>HTML</span><span>CSS</span><span>JavaScript</span><span>OBS</span>
# We'll replace HTML and CSS with Laravel, or just add Laravel and remove HTML
p_content = p_content.replace('<span>HTML</span><span>CSS</span>', '<span>Laravel</span><span>Tailwind</span>')

with open('projects/index.html', 'w') as f:
    f.write(p_content)

print("Fix applied.")
