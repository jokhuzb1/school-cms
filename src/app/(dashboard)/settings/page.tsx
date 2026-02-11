"use client";

import { role } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");

  // Settings state
  const [settings, setSettings] = useState({
    // Account Settings
    email: role === "admin" ? "admin@school.com" : "user@school.com",
    language: "English",
    timezone: "UTC-5 (EST)",
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    announcementNotifications: true,
    messageNotifications: true,
    examReminders: true,
    assignmentReminders: true,
    
    // Privacy Settings
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    allowMessages: true,
    
    // Appearance Settings
    theme: "light",
    compactMode: false,
    sidebarCollapsed: false,
  });

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSelect = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const tabs = [
    { id: "account", label: "Hisob", icon: "/profile.png" },
    { id: "notifications", label: "Bildirishnomalar", icon: "/announcement.png" },
    { id: "privacy", label: "Maxfiylik", icon: "/setting.png" },
    { id: "appearance", label: "Ko'rinish", icon: "/view.png" },
  ];

  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      {/* HEADER */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Sozlamalar</h1>
        <p className="text-sm text-gray-500 mt-1">
          Hisob sozlamalari va sozlamalaringizni boshqaring
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* SIDEBAR TABS */}
        <div className="bg-white p-4 rounded-md lg:w-64">
          <div className="flex lg:flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-lamaSkyLight text-gray-900 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Image src={tab.icon} alt="" width={20} height={20} />
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 bg-white p-6 rounded-md">
          {/* ACCOUNT SETTINGS */}
          {activeTab === "account" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Hisob sozlamalari</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Hisob ma&apos;lumotlaringiz va sozlamalaringizni yangilang
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email manzil
                  </label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => handleSelect("email", e.target.value)}
                    className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Ushbu email hisob bildirishnomalari uchun ishlatiladi
                  </p>
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Til
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSelect("language", e.target.value)}
                    className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>

                {/* Timezone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaqt mintaqasi
                  </label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => handleSelect("timezone", e.target.value)}
                    className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="UTC-5 (EST)">UTC-5 (EST)</option>
                    <option value="UTC-6 (CST)">UTC-6 (CST)</option>
                    <option value="UTC-7 (MST)">UTC-7 (MST)</option>
                    <option value="UTC-8 (PST)">UTC-8 (PST)</option>
                    <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                  </select>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parol
                  </label>
                  <button className="px-4 py-2 bg-lamaSky text-gray-700 rounded-md text-sm hover:bg-opacity-80">
                    Parolni o&apos;zgartirish
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                  O&apos;zgarishlarni saqlash
                </button>
              </div>
            </div>
          )}

          {/* NOTIFICATION SETTINGS */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Bildirishnoma sozlamalari</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Yangilanishlar haqida qanday xabardor bo&apos;lishni tanlang
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Email orqali bildirishnomalar</h3>
                    <p className="text-xs text-gray-500">Email orqali bildirishnoma olish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("emailNotifications")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.emailNotifications ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.emailNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Push bildirishnomalar</h3>
                    <p className="text-xs text-gray-500">Brauzerda push bildirishnomalarni olish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("pushNotifications")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.pushNotifications ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.pushNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Announcement Notifications */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">E&apos;lonlar</h3>
                    <p className="text-xs text-gray-500">Yangi e&apos;lonlar haqida xabardor bo&apos;lish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("announcementNotifications")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.announcementNotifications ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.announcementNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Message Notifications */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Xabarlar</h3>
                    <p className="text-xs text-gray-500">Yangi xabarlar haqida xabardor bo&apos;lish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("messageNotifications")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.messageNotifications ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.messageNotifications ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Exam Reminders */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Imtihon eslatmalari</h3>
                    <p className="text-xs text-gray-500">Yaqinlashib kelayotgan imtihonlar haqida eslatma olish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("examReminders")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.examReminders ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.examReminders ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Assignment Reminders */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Topshiriq eslatmalari</h3>
                    <p className="text-xs text-gray-500">Topshiriq muddatlari haqida eslatma olish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("assignmentReminders")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.assignmentReminders ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.assignmentReminders ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PRIVACY SETTINGS */}
          {activeTab === "privacy" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Maxfiylik sozlamalari</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Maxfiylik va ma&apos;lumotlarni almashish sozlamalarini boshqaring
                </p>
              </div>

              <div className="space-y-4">
                {/* Profile Visibility */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profil ko&apos;rinishi
                  </label>
                  <select
                    value={settings.profileVisibility}
                    onChange={(e) => handleSelect("profileVisibility", e.target.value)}
                    className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="public">Hammaga ochiq - Hamma ko&apos;ra oladi</option>
                    <option value="school">Faqat maktab - Faqat maktab a&apos;zolari</option>
                    <option value="private">Shaxsiy - Faqat men</option>
                  </select>
                </div>

                {/* Show Email */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Email manzilni ko&apos;rsatish</h3>
                    <p className="text-xs text-gray-500">Profilingizda emailni ko&apos;rsatish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("showEmail")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.showEmail ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.showEmail ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Show Phone */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Telefon raqamini ko&apos;rsatish</h3>
                    <p className="text-xs text-gray-500">Profilingizda telefon raqamini ko&apos;rsatish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("showPhone")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.showPhone ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.showPhone ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Allow Messages */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Xabar yuborishga ruxsat</h3>
                    <p className="text-xs text-gray-500">Boshqalarga sizga xabar yuborishga ruxsat berish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("allowMessages")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.allowMessages ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.allowMessages ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* APPEARANCE SETTINGS */}
          {activeTab === "appearance" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Ko&apos;rinish</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Boshqaruv paneli ko&apos;rinishini sozlang
                </p>
              </div>

              <div className="space-y-4">
                {/* Theme */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mavzu
                  </label>
                  <div className="grid grid-cols-3 gap-3 w-full md:w-2/3">
                    <button
                      onClick={() => handleSelect("theme", "light")}
                      className={`p-4 border-2 rounded-md text-sm ${
                        settings.theme === "light"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      ☀️ Yorug&apos;
                    </button>
                    <button
                      onClick={() => handleSelect("theme", "dark")}
                      className={`p-4 border-2 rounded-md text-sm ${
                        settings.theme === "dark"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      🌙 Qorong&apos;i
                    </button>
                    <button
                      onClick={() => handleSelect("theme", "auto")}
                      className={`p-4 border-2 rounded-md text-sm ${
                        settings.theme === "auto"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      🔄 Avtomatik
                    </button>
                  </div>
                </div>

                {/* Compact Mode */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Ixcham rejim</h3>
                    <p className="text-xs text-gray-500">Ko&apos;proq kontent uchun oraliqni kamaytirish</p>
                  </div>
                  <button
                    onClick={() => handleToggle("compactMode")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.compactMode ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.compactMode ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Sidebar Collapsed */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                  <div>
                    <h3 className="text-sm font-medium">Yon panelni yig&apos;ish</h3>
                    <p className="text-xs text-gray-500">Yon panel yig&apos;ilgan holda boshlash</p>
                  </div>
                  <button
                    onClick={() => handleToggle("sidebarCollapsed")}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.sidebarCollapsed ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings.sidebarCollapsed ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
