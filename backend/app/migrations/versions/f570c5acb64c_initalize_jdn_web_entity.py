"""Initalize jdn_web entity..

Revision ID: f570c5acb64c
Revises: 
Create Date: 2021-06-20 20:58:09.940725

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f570c5acb64c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('worships',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('title', sa.String(length=90), nullable=False, index=True),
                    sa.Column('type', sa.String(length=10), nullable=False),
                    sa.Column('date', sa.String(length=10), nullable=False),
                    sa.Column('imamge_url', sa.Text, nullable=False),
                    sa.Column('update_date', sa.TIMESTAMP(timezone=True), nullable=False),
                    sa.Column('create_date', sa.TIMESTAMP(timezone=True), nullable=False),
                    sa.PrimaryKeyConstraint('id'))

def downgrade():
    op.drop_table('worships')
