const fs = require('fs');
const path = require('path');

console.log('🚂 WeatherView Railway Deployment Verification');
console.log('============================================');

// Check required files
const requiredFiles = [
    'package.json',
    'railway.json', 
    'nixpacks.toml',
    'server/index.js',
    'client/package.json',
    'RAILWAY-DEPLOYMENT.md'
];

let allGood = true;

requiredFiles.forEach(file => {
    if (fs.existsSync(path.join(__dirname, file))) {
        console.log(`✅ ${file} exists`);
    } else {
        console.log(`❌ ${file} missing`);
        allGood = false;
    }
});

// Check if client build exists
if (fs.existsSync(path.join(__dirname, 'client/build'))) {
    console.log('✅ Client build directory exists');
} else {
    console.log('⚠️  Client build directory not found (will be created during deployment)');
}

// Check package.json scripts
try {
    const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    const requiredScripts = ['start', 'build', 'install-server', 'install-client'];
    
    console.log('\n📦 Package.json Scripts:');
    requiredScripts.forEach(script => {
        if (pkg.scripts && pkg.scripts[script]) {
            console.log(`✅ ${script}: ${pkg.scripts[script]}`);
        } else {
            console.log(`❌ ${script} script missing`);
            allGood = false;
        }
    });
} catch (error) {
    console.log('❌ Error reading package.json');
    allGood = false;
}

console.log('\n🎯 Deployment Status:');
if (allGood) {
    console.log('✅ Your app is ready for Railway deployment!');
    console.log('\nNext steps:');
    console.log('1. Push to GitHub: git add . && git commit -m "Ready for Railway" && git push');
    console.log('2. Go to railway.app and deploy from GitHub');
    console.log('3. Set environment variables: DATABASE, NODE_ENV=production, REACT_APP_WEATHER_API_KEY');
    console.log('4. Your app will be live! 🚀');
} else {
    console.log('❌ Some issues found. Please fix them before deploying.');
}

console.log('\n📊 Railway Free Tier Limits:');
console.log('• 500 hours/month');
console.log('• 512MB RAM');
console.log('• 1GB storage');
console.log('• 100GB bandwidth');
console.log('• Perfect for your weather app! 🌤️');
