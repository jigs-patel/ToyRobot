using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyRobot.Services.Enums;
using ToyRobot.Services.Interface;
using ToyRobot.Services.Models;

namespace ToyRobot.Services
{
    public class ToyRobotService : IToyRobotService
    {

        private readonly ILogger<ToyRobotService> _logger;

        public ToyRobotService(ILogger<ToyRobotService> logger)
        {
            _logger = logger;
        }
        public Position MoveLeft(Position position)
        {
            try
            {
                switch (position.Dir)
                {
                    case nameof(Directions.North):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.West);
                        break;
                    case nameof(Directions.South):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.East);
                        break;
                    case nameof(Directions.East):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.North);
                        break;
                    case nameof(Directions.West):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.South);
                        break;
                    default:
                        break;
                }
            }
            catch (Exception e)
            {
                _logger.LogError("Error in MoveLeft", e.Message);
                throw;
            }

            return position;
        }

        public Position MoveRight(Position position)
        {     
            try
            {
                switch (position.Dir)
                {
                    case nameof(Directions.North):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.East);
                        break;
                    case nameof(Directions.South):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.West);
                        break;
                    case nameof(Directions.East):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.South);
                        break;
                    case nameof(Directions.West):
                        position.Dir = Enum.GetName(typeof(Directions), Directions.North);
                        break;
                    default:
                        break;
                }
            }
            catch (Exception e)
            {
                _logger.LogError("Error in MoveRight", e.Message);
                throw;
            }

            return position;
        }

        public Position MoveRobot(Position position)
        {

            try
            {
                if (position != null)
                {
                    switch (position.Dir)
                    {
                        case nameof(Directions.North):
                            if (position.Row < position.MaxRows - 1)
                                position.Row++;
                            break;

                        case nameof(Directions.South):
                            if (position.Row > 0)
                                position.Row--;
                            break;

                        case nameof(Directions.East):
                            if (position.Col < position.MaxCols - 1)
                                position.Col++;
                            break;

                        case nameof(Directions.West):
                            if (position.Col > 0)
                                position.Col--;
                            break;

                        default:
                            break;
                    }

                }
            }
            catch (Exception e)
            {
                _logger.LogError("Error in MoveRobot", e.Message);
                throw;
            }

            return position;

        }

        public Position PlaceRobot(Position position)
        {

            if (position.Row >= 0 && position.Row < position.MaxRows && position.Col >= 0 && position.Col < position.MaxCols && !string.IsNullOrEmpty(position.Dir))
            {
                var newPosition = new Position()
                {
                    Row = position.Row,
                    Col = position.Col,
                    Dir = position.Dir,
                    MaxRows = position.MaxRows,
                    MaxCols = position.MaxCols
                };

                return newPosition;

            }

            return position;
        }
    }
}
