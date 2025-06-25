// Local storage based authentication service
class LocalAuthService {
    constructor() {
        this.users = this.getUsers();
    }

    // Get users from localStorage
    getUsers() {
        const users = localStorage.getItem('weatherapp_users');
        return users ? JSON.parse(users) : [];
    }

    // Save users to localStorage
    saveUsers(users) {
        localStorage.setItem('weatherapp_users', JSON.stringify(users));
        this.users = users;
    }

    // Register a new user
    register(userData) {
        const { name, email, password } = userData;
        
        // Check if user already exists
        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password, // In a real app, you'd hash this
            createdAt: new Date().toISOString()
        };

        // Add to users array and save
        this.users.push(newUser);
        this.saveUsers(this.users);

        return { success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email } };
    }

    // Login user
    login(credentials) {
        const { email, password } = credentials;
        
        // Find user
        const user = this.users.find(user => user.email === email);
        if (!user) {
            throw new Error('No user found with this email');
        }

        // Check password
        if (user.password !== password) {
            throw new Error('Invalid password');
        }

        // Return user data (without password)
        return { 
            success: true, 
            user: { 
                id: user.id, 
                name: user.name, 
                email: user.email 
            } 
        };
    }

    // Get current user
    getCurrentUser() {
        const user = localStorage.getItem('weatherapp_current_user');
        return user ? JSON.parse(user) : null;
    }

    // Set current user
    setCurrentUser(user) {
        localStorage.setItem('weatherapp_current_user', JSON.stringify(user));
    }

    // Logout
    logout() {
        localStorage.removeItem('weatherapp_current_user');
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }
}

// Create singleton instance
const authService = new LocalAuthService();

export default authService;
