'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface LoginProps {
  onLoginSuccess: () => void
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Hardcoded credentials
  const VALID_USERNAME = 'admin'
  const VALID_PASSWORD = 'valentine2024'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        onLoginSuccess()
      } else {
        setError('Invalid username or password')
        setPassword('')
      }
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin(e as any)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/10 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="text-5xl">💌</div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary text-balance">
              Valentine's Day
            </h1>
            <p className="text-foreground/60">
              Enter your credentials to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-foreground">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border-2 border-primary/20 bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                disabled={isLoading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-secondary/10 border border-secondary/30 rounded-lg">
                <p className="text-sm text-secondary font-medium">{error}</p>
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
            <p>This is a special Valentine's message just for you</p>
          </div>
        </div>
      </div>
    </div>
  )
}
