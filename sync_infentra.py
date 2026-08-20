with open('index.html', 'r') as f:
    content = f.read()

# Replace the Infentra block in index.html
old_block = """                <div class="project-showcase" data-category="uiux">
                    <div class="showcase-number">04</div>
                    <a href="#" class="showcase-image">
                        <img src="img/infentra.webp" alt="Infentra Logistics" loading="lazy" onerror="this.style.display='none'">
                    </a>
                    <div class="showcase-content">
                        <h3>Infentra</h3>
                        <p>A comprehensive system built with elegant data visualization and robust features.</p>
                        <div class="showcase-tags">
                            <span>Figma</span>
                            <span>Data visualization</span>
                            <span>UI/UX</span>
                        </div>
                        <a href="#" class="showcase-link">View Case Study <span>→</span></a>
                    </div>
                </div>"""

new_block = """                <div class="project-showcase" data-category="web">
                    <div class="showcase-number">04</div>
                    <a href="https://infentra2025.com/" target="_blank" class="showcase-image">
                        <img src="img/infentra.webp" alt="INFENTRA 2025" loading="lazy" onerror="this.style.display='none'">
                    </a>
                    <div class="showcase-content">
                        <div class="showcase-tags">
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>
                            <span>Event System</span>
                        </div>
                        <h3>INFENTRA 2025</h3>
                        <p>Managed the event website for participant registration and operated live streaming systems to ensure a seamless technical experience.</p>
                        <a href="https://infentra2025.com/" target="_blank" class="showcase-link">View Project <span>→</span></a>
                    </div>
                </div>"""

if old_block in content:
    content = content.replace(old_block, new_block)
else:
    print("Could not find the exact old block. Let's try regex or manual replace.")

with open('index.html', 'w') as f:
    f.write(content)

print("Infentra sync done.")
