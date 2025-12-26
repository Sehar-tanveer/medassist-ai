"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { mockConversations, mockMessages } from "@/lib/mock-data"

/**
 * Admin Dashboard - WhatsApp Conversations Page
 * WhatsApp-style conversation UI with conversation list and message pane
 */
export default function AdminConversationsPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(
    mockConversations[0]?.id || null
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">WhatsApp Conversations</h1>
        <p className="text-muted-foreground">
          Manage patient conversations and messages
        </p>
      </div>

      {/* Conversation UI */}
      <div className="flex h-[600px] gap-4">
        {/* Conversation List */}
        <Card className="w-80 flex-shrink-0 flex flex-col">
          <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
            <ScrollArea className="flex-1">
              <div className="p-2">
                {mockConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
                      selectedConversation === conversation.id
                        ? "bg-accent"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <Avatar>
                      <AvatarFallback>
                        {conversation.patientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">
                          {conversation.patientName}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <Badge variant="default" className="ml-2">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {conversation.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Message Pane */}
        <Card className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Message Header */}
              <div className="border-b p-4 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {mockConversations
                        .find((c) => c.id === selectedConversation)
                        ?.patientName.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {
                        mockConversations.find(
                          (c) => c.id === selectedConversation
                        )?.patientName
                      }
                    </p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1">
                <div className="p-4">
                  <div className="space-y-4">
                    {mockMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === "patient"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.sender === "patient"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "patient"
                                ? "text-primary-foreground/70"
                                : "text-muted-foreground"
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>

              {/* Message Input Area */}
              <div className="border-t p-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Select a conversation to view messages
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
