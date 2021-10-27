using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyRobot.Services.Enums;

namespace ToyRobot.Services.Models
{
    public class Position
    {
        public int Row { get; set; }
        public int Col { get; set; }
        public string Dir { get; set; }

        public int MaxRows { get; set; }
        public int MaxCols { get; set; }


    }
}
