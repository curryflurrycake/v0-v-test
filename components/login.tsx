'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import LoadingScreen from '@/components/loading-screen'


interface LoginProps {
  onLoginSuccess: () => void
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  setError('')
  setIsLoading(true)

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (res.ok) {
    onLoginSuccess()
  } else {
    setError('Invalid username or password')
    setPassword('')
  }

  setIsLoading(false)
}


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin(e as any)
    }
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen bg-gradient-to-b from-red-900 via-background to-accent/10 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-red-800 backdrop-blur rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="text-5xl">🔒</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-balance">
              LOG-IN FIRST
            </h1>
            <p className="text-white/80">
              Enter your credentials to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-white/80">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-white text-primary/80 placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white/80">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-white text-primary/80 placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-secondary/10 border border-secondary/30 rounded-lg">
                <p className="text-sm text-white/80 font-medium">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Footer hint */}
          <div className="text-center text-xs text-foreground/50">
            <p>Enter the credentials given to YOU only</p>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}
