from model.exceptions import OutOfRangeError
from model.weapon import Weapon


class SurfaceMissileLauncher(Weapon):
    def __init__(self):
        super().__init__(ammunitions=40, range=30)

    def check_target_position(self, x, y, z):
        if z != 0:
            self.ammunitions = self.ammunitions - 1
            raise OutOfRangeError(
                "Impossible d'atteindre la cible ! z doit être = 0")
