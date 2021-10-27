using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyRobot.Services.Models;

namespace ToyRobot.Services.Interface
{
    public interface IToyRobotService
    {
        public Position PlaceRobot(Position position);
        public Position MoveRobot(Position position);
        public Position MoveLeft(Position position);
        public Position MoveRight(Position position);

    }
}
