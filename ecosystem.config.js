module.exports = {
  apps: [{
    name: 'ratingsgraph',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.218.19.199',
      key: '~/.ssh/jayhr.pem',
      ref: 'origin/master',
      repo: 'https://github.com/axe-center/jayk-ratingsgraph.git',
      path: '/home/ubuntu/graph1',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}