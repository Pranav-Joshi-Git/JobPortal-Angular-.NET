using Microsoft.EntityFrameworkCore;
using RecruitmentBackend.Models;

namespace RecruitmentBackend.Data
{
    public class RecruitmentDbContext : DbContext
    {
        public RecruitmentDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Job> Jobs { get; set; }

    }
}
