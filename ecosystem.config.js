module.exports = {
  apps: [{
    script: 'npm start',
  }],
  deploy: {
    production: {
      key: 'key.pem',
      user: 'ubuntu',
      host: '18.136.101.181',
      ref: 'origin/main',
      repo: 'git@github.com:3nzoo/keatrucking.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
};
