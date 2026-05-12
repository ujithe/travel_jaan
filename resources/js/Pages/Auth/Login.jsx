import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ canResetPassword, status, isAdminLogin = false }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event) => {
        event.preventDefault();

        const routeName = isAdminLogin ? 'admin.login.store' : 'login';

        post(route(routeName), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title={isAdminLogin ? 'Admin Login' : 'Login'} />
            <div className="min-h-screen bg-slate-950 px-4 py-12">
                <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/95 p-8 shadow-2xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {isAdminLogin ? 'Admin Access' : 'Welcome Back'}
                    </p>
                    <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                        {isAdminLogin ? 'JAAN Admin Login' : 'Sign In'}
                    </h1>

                    {status && (
                        <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="mt-6 space-y-4">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
                                autoComplete="username"
                                required
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(event) => setData('password', event.target.value)}
                                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
                                autoComplete="current-password"
                                required
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(event) => setData('remember', event.target.checked)}
                            />
                            Remember me
                        </label>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
                        >
                            {processing ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 space-y-2 text-sm">
                        {!isAdminLogin && (
                            <p className="text-slate-600">
                                Need admin access?{' '}
                                <Link href={route('admin.login')} className="font-medium text-slate-900 underline">
                                    Go to admin login
                                </Link>
                            </p>
                        )}
                        {isAdminLogin && (
                            <p className="text-slate-600">
                                Regular user?{' '}
                                <Link href={route('login')} className="font-medium text-slate-900 underline">
                                    Go to normal login
                                </Link>
                            </p>
                        )}
                        {canResetPassword && (
                            <Link href={route('password.request')} className="font-medium text-slate-900 underline">
                                Forgot password?
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
