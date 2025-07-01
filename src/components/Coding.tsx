import { Trophy, Star, Calendar, Award } from "lucide-react";

const Coding = () => {
  const platforms = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/rudra_010402/",
      username: "rudra_010402",
      rating: 1984,
      rank: "Knight",
      problemsSolved: 347,
      contestsParticipated: 46,
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/rudra_142",
      username: "rudra_142",
      rating: 1120,
      rank: "Newbie",
      problemsSolved: 17,
      contestsParticipated: 9,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/rudra_0142",
      username: "rudra_0142",
      rating: 1610,
      rank: "3 Star",
      problemsSolved: 18,
      contestsParticipated: 7,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    // {
    //   name: 'AtCoder',
    //   username: 'john_d',
    //   rating: 1456,
    //   rank: 'Blue',
    //   problemsSolved: 285,
    //   contestsParticipated: 18,
    //   color: 'from-green-500 to-emerald-500',
    //   bgColor: 'bg-green-500/10',
    //   borderColor: 'border-green-500/30'
    // }
  ];

  const achievements = [
    {
      title: "Knight Badge",
      description: "Achieved Knight Badge on LeetCode",
      icon: Award,
      date: "2025",
      color: "text-blue-400",
    },
    {
      title: "100 Days Streak",
      description: "Consistent daily problem solving",
      icon: Calendar,
      date: "2025",
      color: "text-green-400",
    },
    {
      title: '3 Star',
      description: 'Achieved 3 Star on CodeChef',
      icon: Star,
      date: '2025',
      color: 'text-purple-400'
    },
    {
      title: "Global Rank 415",
      description: "LeetCode Bi-Weekly Contest #148",
      icon: Trophy,
      date: "2025",
      color: "text-yellow-400",
    },
    {
      title: "5 Star",
      description: "Achieved 5 Star in C++ on Hackerrank",
      icon: Star,
      date: "2023",
      color: "text-blue-400",
    },
  ];

  // const skills = [
  //   { name: 'Data Structures', level: 90 },
  //   { name: 'Algorithms', level: 85 },
  //   { name: 'Dynamic Programming', level: 80 },
  //   { name: 'Graph Theory', level: 75 },
  //   { name: 'Greedy Algorithms', level: 85 },
  //   { name: 'Tree Algorithms', level: 80 }
  // ];

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Competitive{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Programming
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey in competitive programming and algorithmic problem
            solving
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <a href={platform.link} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className={`${platform.bgColor} p-6 rounded-xl border ${platform.borderColor} hover:transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-1`}
                  >
                    {platform.rating}
                  </div>
                  <div className="text-red-400 text-sm mb-4">
                    {platform.rank}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Problems:</span>
                      <span className="text-white">
                        {platform.problemsSolved}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Contests:</span>
                      <span className="text-white">
                        {platform.contestsParticipated}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Achievements
            </h3>
            <div className="grid lg:grid-cols-2 gap-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300"
                >
                  <div
                    className={`p-2 rounded-full bg-gray-800 ${achievement.color}`}
                  >
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-gray-500">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-400" />
              Problem Solving Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Recent Activity */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Clock className="w-6 h-6 text-green-400" />
            Recent Activity
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">15</div>
                <div className="text-gray-400 text-sm">Problems solved this week</div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-gray-400 text-sm">Contests participated</div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">47</div>
                <div className="text-gray-400 text-sm">Current streak (days)</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Coding;
