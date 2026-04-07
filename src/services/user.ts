import Cookies from 'js-cookie';

const UserServices = {

    login: async (email: string, password: string): Promise<{ success: boolean, message?: string }> => {
        await new Promise((resolve) => setInterval(resolve, 1000));

        if (email == 'teste@teste.com' && password == '123456') {
            const user = { email, id: 1, name: 'Teste' };
            Cookies.set('user', JSON.stringify(user));
            return { success: true }
        } else
            return { success: false, message: 'Login incorreto' };
    },

    getCurrentUser: () => {
        const user = Cookies.get('user');
        return user ? JSON.parse(user) : null;
    },

    resetPassword: async (email: string): Promise<{ success: boolean }> => {
        await new Promise((resolve) => setInterval(resolve, 1000));
        return { success: true };
    },

    logout: async (): Promise<{ success: boolean }> => {
        new Promise((resolve) => setInterval(resolve, 1000));
        Cookies.remove('user');
        return { success: true };
    },

    getAll: async (page: number, filter: any = {}): Promise<{ success: boolean, users?: any[], pagination?: any }> => {
        await new Promise((resolve) => setInterval(resolve, 2000));

        return {
            success: true, users: [
                { id: 1, name: 'Teste', email: 'teste@teste.com', admin: false },
                { id: 2, name: 'Admin', email: 'admin@teste.com', admin: true },
                { id: 3, name: 'Arthur', email: 'arthur@teste.com', admin: true },
                { id: 4, name: 'Hugo', email: 'hugo@teste.com', admin: false }
            ],
            pagination: {
                firstPage: false,
                lastPage: false,
            }

        }
    },

    getById: async (id: number): Promise<{ success: boolean, user: any }> => {
        new Promise((resolve) => setInterval(resolve, 1000));
        if (id == 1)
            return { success: true, user: { id: 1, name: 'Teste', email: 'teste@teste.com', admin: false } }
        else
            return { success: false, user: null }
    },

    create: async (user: any): Promise<{ success: boolean, error?: string }> => {
        new Promise((resolve) => setInterval(resolve, 1000));
        return { success: true };
    },

    update: async (user: any): Promise<{ success: boolean, error?: string }> => {
        new Promise((resolve) => setInterval(resolve, 1000));
        return { success: true };
    },

    delete: async (id: number): Promise<{ success: boolean }> => {
        new Promise((resolve) => setInterval(resolve, 1000));
        return { success: true };
    }
}

export default UserServices;