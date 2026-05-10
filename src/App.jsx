import { useState } from 'react';

export default function GymFeeAutomationDemo() {
  const [notification, setNotification] = useState('');
  const [paidMembers, setPaidMembers] = useState(186);
  const [pendingMembers, setPendingMembers] = useState(42);
  const [monthlyRevenue, setMonthlyRevenue] = useState(245680);

  const members = [
    {
      name: 'Rahul Sharma',
      due: '12 May',
      amount: '₹2,500',
      status: 'Pending',
    },
    {
      name: 'Aman Verma',
      due: '15 May',
      amount: '₹3,000',
      status: 'Paid',
    },
    {
      name: 'Neha Singh',
      due: '18 May',
      amount: '₹2,000',
      status: 'Pending',
    },
    {
      name: 'Pooja Reddy',
      due: '20 May',
      amount: '₹4,500',
      status: 'Paid',
    },
  ];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2500);
  };

  const sendReminder = () => {
    showNotification('WhatsApp fee reminders sent successfully');
  };

  const markPaid = () => {
    setPaidMembers(paidMembers + 1);
    setPendingMembers(pendingMembers - 1);
    setMonthlyRevenue(monthlyRevenue + 2500);
    showNotification('Payment marked as received');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white px-4 py-5 sm:p-6 overflow-x-hidden">
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-green-500 text-black px-6 py-4 rounded-2xl shadow-2xl animate-pulse font-semibold">
          {notification}
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
        {/* Top Navbar */}
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-5 sm:p-6 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              FeeFlow Automation
            </h1>
            <p className="text-zinc-400 mt-1">
              Automated WhatsApp fee reminders for gyms & fitness centers.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap w-full lg:w-auto">
            <button
              onClick={sendReminder}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-5 sm:px-6 py-3 rounded-2xl transition active:scale-95 w-full sm:w-auto shadow-lg shadow-green-500/20"
            >
              Send WhatsApp Reminders
            </button>

            <button
              onClick={() => showNotification('Monthly report generated')}
              className="bg-zinc-800 hover:bg-zinc-700 px-5 sm:px-6 py-3 rounded-2xl transition w-full sm:w-auto"
            >
              Generate Report
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 sm:gap-6">
          <div className="xl:col-span-2 bg-zinc-900/90 backdrop-blur-xl rounded-[2rem] border border-zinc-800 overflow-hidden relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop"
              alt="gym"
              className="w-full h-[300px] sm:h-[360px] object-cover opacity-30 scale-105"
            />

            <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
                  Stop Chasing Members
                  <br />
                  <span className="text-green-400">
                    Automate Fee Collection
                  </span>
                </h2>

                <p className="text-zinc-300 text-base sm:text-lg mt-5 leading-relaxed max-w-2xl">
                  Automatically send polite WhatsApp reminders before due dates.
                  Track pending payments, monthly revenue and fee collection in
                  one dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={sendReminder}
                    className="bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-4 rounded-2xl text-lg transition"
                  >
                    Send Automated Reminder
                  </button>

                  <button
                    onClick={() =>
                      showNotification('Gym owner dashboard opened')
                    }
                    className="border border-zinc-600 hover:border-green-400 px-7 py-4 rounded-2xl text-lg transition"
                  >
                    View Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Preview */}
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-2xl font-bold">WhatsApp Preview</h3>
              <div className="bg-green-500 h-3 w-3 rounded-full animate-pulse"></div>
            </div>

            <div className="bg-[#111B21] rounded-[2rem] p-4 border border-zinc-700 h-[380px] sm:h-[420px] flex flex-col justify-between shadow-inner">
              <div className="space-y-4">
                <div className="bg-[#202C33] p-4 rounded-2xl w-fit max-w-[90%]">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Hi Rahul 👋
                    <br />
                    Friendly reminder from FitPro Gym.
                    <br />
                    Your membership fee of ₹2,500 is due on 12 May.
                    <br />
                    Please make payment to continue uninterrupted access.
                  </p>
                </div>

                <div className="bg-green-500 text-black p-4 rounded-2xl w-fit ml-auto font-semibold">
                  Payment Link
                </div>
              </div>

              <button
                onClick={sendReminder}
                className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-2xl transition"
              >
                Send Reminder Now
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-5 sm:p-6 hover:border-green-400 transition shadow-xl hover:-translate-y-1 duration-300">
            <p className="text-zinc-400 text-sm">Members Paid This Month</p>
            <h2 className="text-4xl sm:text-5xl font-black mt-3">{paidMembers}</h2>
            <p className="text-green-400 mt-2">+18% from last month</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-red-400 transition">
            <p className="text-zinc-400 text-sm">Pending Payments</p>
            <h2 className="text-4xl sm:text-5xl font-black mt-3">{pendingMembers}</h2>
            <p className="text-red-400 mt-2">Automatic reminders active</p>
          </div>

          <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-5 sm:p-6 hover:border-green-400 transition shadow-xl hover:-translate-y-1 duration-300">
            <p className="text-zinc-400 text-sm">Monthly Revenue</p>
            <h2 className="text-4xl sm:text-5xl font-black mt-3">
              ₹{monthlyRevenue.toLocaleString()}
            </h2>
            <p className="text-green-400 mt-2">Revenue tracked automatically</p>
          </div>
        </div>

        {/* Fee Tracking Table */}
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-5 sm:p-6 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div>
              <h3 className="text-3xl font-black">Fee Tracking Dashboard</h3>
              <p className="text-zinc-400 mt-1">
                Monitor all payments and automate follow-ups.
              </p>
            </div>

            <button
              onClick={sendReminder}
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-2xl transition"
            >
              Send Bulk Reminders
            </button>
          </div>

          <div className="space-y-4">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-black border border-zinc-800 rounded-2xl p-5 hover:border-green-400 transition"
              >
                <div className="flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-zinc-400 mt-1">
                      Due Date: {member.due}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 flex-wrap w-full xl:w-auto">
                    <div>
                      <p className="text-zinc-500 text-sm">Amount</p>
                      <h5 className="text-2xl font-bold">{member.amount}</h5>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        member.status === 'Paid'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {member.status}
                    </span>

                    <button
                      onClick={sendReminder}
                      className="bg-zinc-800 hover:bg-green-500 hover:text-black px-5 py-3 rounded-xl transition font-semibold"
                    >
                      Send Reminder
                    </button>

                    <button
                      onClick={markPaid}
                      className="bg-green-500 hover:bg-green-400 text-black px-5 py-3 rounded-xl transition font-bold"
                    >
                      Mark Paid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            'Automatic WhatsApp Reminders',
            'Monthly Revenue Tracking',
            'Pending Fee Dashboard',
            'One Click Payment Follow-up',
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-6 hover:border-green-400 transition"
            >
              <div className="h-14 w-14 bg-green-500 text-black rounded-2xl flex items-center justify-center text-2xl font-black">
                {idx + 1}
              </div>

              <h4 className="text-2xl font-black mt-5">{feature}</h4>

              <p className="text-zinc-400 mt-3 leading-relaxed">
                Reduce awkward payment conversations and automate fee collection.
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-[2rem] p-6 sm:p-10 text-center text-black shadow-[0_20px_80px_rgba(34,197,94,0.25)]">
          <h2 className="text-3xl sm:text-5xl font-black leading-tight">
            Let Automation Collect Your Fees
          </h2>

          <p className="mt-4 text-base sm:text-xl max-w-3xl mx-auto opacity-80 leading-relaxed">
            Save staff time, improve collections and give your gym a modern automated experience.
          </p>

          <div className="flex justify-center gap-5 mt-8 flex-wrap">
            <button
              onClick={sendReminder}
              className="bg-black text-white hover:bg-zinc-900 transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Start Automation
            </button>

            <button
              onClick={() => showNotification('Demo scheduled successfully')}
              className="border border-black hover:bg-black hover:text-white transition px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
