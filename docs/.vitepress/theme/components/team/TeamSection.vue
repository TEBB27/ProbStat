<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-center mb-8">Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="member in teamMembers" :key="member.id" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img :src="member.image" :alt="member.name" class="w-full h-48 object-cover object-center">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
          <p class="text-gray-600 mb-4">{{ member.role }}</p>
          <div class="flex justify-center space-x-4">
            <a v-for="link in member.socialLinks" :key="link.platform" :href="link.url" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-700 transition-colors duration-300">
              <component :is="link.icon" size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Twitter, Linkedin, Github } from 'lucide-vue-next';

const teamMembers = ref([
  {
    id: 1,
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: '/placeholder.svg?height=300&width=400',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/janedoe', icon: Twitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe', icon: Linkedin },
      { platform: 'github', url: 'https://github.com/janedoe', icon: Github },
    ],
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=300&width=400',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/johnsmith', icon: Twitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/johnsmith', icon: Linkedin },
      { platform: 'github', url: 'https://github.com/johnsmith', icon: Github },
    ],
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'Lead Designer',
    image: '/placeholder.svg?height=300&width=400',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/emilybrown', icon: Twitter },
      { platform: 'linkedin', url: 'https://linkedin.com/in/emilybrown', icon: Linkedin },
      { platform: 'github', url: 'https://github.com/emilybrown', icon: Github },
    ],
  },
]);
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>