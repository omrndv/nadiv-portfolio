with open('index.html', 'r') as f:
    content = f.read()

# Update meta description
old_meta = '<meta name="description" content="Personal portfolio of Muhammad Omar Nadiv, an Informatics Engineering student and Freelance Web Developer in Indonesia, building functional, scalable, and intuitive web solutions.">'
new_meta = '<meta name="description" content="Personal portfolio of Muhammad Omar Nadiv, an Informatics Engineering student and Freelance Web Developer in Purwokerto, Indonesia, building functional, scalable, and intuitive web solutions.">'
content = content.replace(old_meta, new_meta)

# Update about text
old_about = "I'm Muhammad Omar Nadiv, an Informatics Engineering student and <strong>Freelance Web Developer</strong> based in Indonesia. I don't just write code, I design scalable web systems, optimize SEO, and <span>craft digital experiences</span> that actually feel good to use."
new_about = "I'm Muhammad Omar Nadiv, an Informatics Engineering student and <strong>Freelance Web Developer</strong> based in Purwokerto, Indonesia. I don't just write code, I design scalable web systems, optimize SEO, and <span>craft digital experiences</span> that actually feel good to use."
content = content.replace(old_about, new_about)

with open('index.html', 'w') as f:
    f.write(content)

print("Local SEO updated.")
