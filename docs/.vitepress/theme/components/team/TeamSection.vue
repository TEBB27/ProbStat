<template>
  <div class="team-container">
    <h2 class="team-title">Nuestro Equipo</h2>
    <div class="team-grid">
      <div v-for="member in teamMembers" :key="member.id" class="team-card">
        <img :src="member.image" :alt="member.name" class="team-image" />
        <div class="team-info">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <div class="social-links">
            <a
              v-for="link in member.socialLinks"
              :key="link.platform"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              :class="socialColors[link.platform]"
            >
              <FontAwesomeIcon :icon="link.icon" class="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const teamMembers = ref([
  {
    id: 1,
    name: 'Tomás Briceño',
    role: 'Estudiante de Ingeniería Industrial',
    image: '/images/tebb-image.webp?height=300&width=400',
    socialLinks: [
      { platform: 'x', url: 'https://twitter.com/janedoe', icon: faXTwitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe', icon: faLinkedin },
      { platform: 'github', url: 'https://github.com/janedoe', icon: faGithub },
    ],
  },
  {
    id: 2,
    name: 'Edward Cantor',
    role: 'Estudiante de Ingeniería Industrial',
    image: '/placeholder.svg?height=300&width=400',
    socialLinks: [
      { platform: 'x', url: 'https://twitter.com/johnsmith', icon: faXTwitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/johnsmith', icon: faLinkedin },
      { platform: 'github', url: 'https://github.com/johnsmith', icon: faGithub },
    ],
  },
  {
    id: 3,
    name: 'Samuel Rodríguez',
    role: 'Estudiante de Ingeniería Industrial',
    image: '/placeholder.svg?height=300&width=400',
    socialLinks: [
      { platform: 'x', url: 'https://twitter.com/emilybrown', icon: faXTwitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/emilybrown', icon: faLinkedin },
      { platform: 'github', url: 'https://github.com/emilybrown', icon: faGithub },
    ],
  },
]);

const socialColors = {
  x: "hover:text-blue-400",
  linkedin: "hover:text-blue-600",
  github: "hover:text-gray-900 dark:hover:text-gray-300",
};
</script>

<style scoped>
.team-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.team-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #222;
}

.dark .team-title {
  color: #f5f5f5;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Tarjetas */
.team-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px);
}

/* Modo oscuro */
.dark .team-card {
  background: #1B1B1F;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.team-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.team-info {
  padding: 1.5rem;
  text-align: center;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
}

.dark .member-name {
  color: #f5f5f5;
}

.member-role {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.dark .member-role {
  color: #bbb;
}

/* Redes Sociales */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.icon {
  width: 28px;
  height: 28px;
}
</style>
