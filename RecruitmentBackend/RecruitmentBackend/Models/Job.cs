using MessagePack;
using System.ComponentModel.DataAnnotations;
using KeyAttribute = System.ComponentModel.DataAnnotations.KeyAttribute;

namespace RecruitmentBackend.Models
{
    public class Job
    {
        [Key]
        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public string JobDesc { get; set; }
        public string JobSkills { get; set; }
        public int MinExp { get; set; }
        public int MaxExp { get; set; }
    }
}
